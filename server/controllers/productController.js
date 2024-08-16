const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const {where} = require("sequelize");

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, typeID, subtypeID, info} = req.body
            const {img} = req.files
            let name_img = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', name_img))
            const product = await Product.create({
                name, price, typeID, subtypeID, img: name_img
            })

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => ProductInfo.create({
                    title: i.title,
                    description: i.description,
                    productID: product.id
                }))
            }
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {typeID, subtypeID, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products
        if (!typeID && !subtypeID) {
            products = await Product.findAndCountAll({limit, offset})
        }
        if (typeID && !subtypeID) {
            products = await Product.findAndCountAll({where:{typeID}, limit, offset})
        }
        if (!typeID && subtypeID) {
            products = await Product.findAndCountAll({where:{subtypeID}, limit, offset})
        }
        if (typeID && subtypeID) {
            products = await Product.findAndCountAll({where:{typeID, subtypeID}, limit, offset})
        }
        return res.json(products)
    }

    async get(req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {where: {id}, include: [{model: ProductInfo, as: 'info'}]}
        )
        return res.json(product)
    }

}

module.exports = new ProductController()