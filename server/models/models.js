const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    username: {type:DataTypes.STRING},
    email: {type:DataTypes.STRING, unique: true},
    password: {type:DataTypes.STRING},
    role: {type:DataTypes.STRING, defaultValue:'USER'},
})

const Basket = sequelize.define('basket',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

const BasketProduct = sequelize.define('basket_product',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

const Product = sequelize.define('product',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, unique: true, allowNull: false},
    price: {type:DataTypes.INTEGER, allowNull: false},
    img: {type:DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    typename: {type:DataTypes.STRING, unique: true, allowNull: false},
})

const Subtype = sequelize.define('subtype',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    typename: {type:DataTypes.STRING, unique: true, allowNull: false},
})

const ProductInfo = sequelize.define('product_info',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title: {type:DataTypes.STRING, allowNull: false},
    description: {type:DataTypes.STRING, allowNull: false},
})

const TypeSubtype = sequelize.define('type_subtype', {
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Type.hasMany(Product)
Product.belongsTo(Type)

Subtype.hasMany(Product)
Product.belongsTo(Subtype)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(ProductInfo, {as: 'info'})
ProductInfo.belongsTo(Product)

Type.belongsToMany(Subtype, {through: TypeSubtype})
Subtype.belongsToMany(Type, {through: TypeSubtype})

module.exports = {
    User, Basket, BasketProduct, Product, ProductInfo, Type, Subtype, TypeSubtype
}