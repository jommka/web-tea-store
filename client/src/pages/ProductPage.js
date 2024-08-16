import React, {useContext, useEffect, useState} from 'react';
import black from "../styles/img/black tea-1.jpg";
import Header from "../components/UI/Header";
import path from "../components/UI/picture/path.svg";
import bags from "../components/UI/picture/button-bags.svg";
import decrease from "../components/UI/picture/decrease.svg";
import increase from "../components/UI/picture/increase.svg";
import temp from "../components/UI/picture/temperature.svg";
import time from "../components/UI/picture/time.svg";

import {useParams} from 'react-router-dom';
import {BasketContext} from "../components/context/BasketContext";
import {Toaster} from "sonner";
import {Item} from "../store/Item";
import ItemShop from "../components/ItemShop";

const ProductPage = () => {
    const item = {id: 3, name: 'Английский завтрак', price: 105, img: black, desc: 'best', category: 'tea', subcategory: 'черный чай',
        desc_main:'Купаж из чёрного цейлонского и индийского чая с терпким вкусом и длительным цветочным послевкусием.',
        manufacturer: 'Россия',
        collection: '2024',
        conditions: 'хранить в сухом месте при относительной влажности не более 70% в плотно закрытой упаковке отдельно от остропахнущих предметов',
        shelf_life: '36 месяцев',
        temperature: '95°С',
        time: '2-3 мин'}

    const {id} = useParams()
    const { valueProduct, addCartProduct, removeCartProduct, updateCartProduct } = useContext(BasketContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let product = '50 гр'
    if (item.category !== 'tea') {
        product = 'шт'
    }

    return (
        <>
            <Header/>
            <div className="App">
                <div className="basket" id="block-path-product">
                    <div className="basket-path">
                        <p>Главная</p>
                        <img src={path} alt="path"/>
                        <p>Магазин</p>
                        <img src={path} alt="path"/>
                        <span>{item.name}</span>
                    </div>
                </div>
            </div>

            <div className="raw"></div>
            <div className="product-block">
                <div className="col">
                    <div className="product">
                        <div className="block-img">
                            <img src={item.img} alt={item.name}></img>
                        </div>
                        <div className="block-product">
                            <div className="product-name">
                                <span>{item.subcategory}</span>
                                <p>{item.name}</p>
                            </div>
                            <span>{item.desc_main}</span>
                            <button id="button-count">
                                <img src={decrease} onClick={() => removeCartProduct()}/>
                                <input value={valueProduct} readOnly={true} id="input-count"/>
                                <img src={increase} onClick={() => addCartProduct()}/>
                            </button>
                            <div className="block-price">
                                <div id="price-product">
                                    <span>{product}</span>
                                    <p>${item.price}</p>
                                </div>
                                <button onClick={() => updateCartProduct(item.id)}><img src={bags}/>Купить</button>
                            </div>
                        </div>
                    </div>

                    <div className="desc-block">
                        <div>
                            <h1>Описание</h1>
                            <p>Производитель: {item.manufacturer}</p>
                            <p>Сбор: {item.collection}</p>
                            <p>Упаковка: прозрачный пакет</p>
                            <p>Условия хранения: {item.conditions}</p>
                            <p>Срок годности: {item.shelf_life}</p>
                        </div>
                        <div>
                            <h1>Как готовить</h1>
                            <div className="desc">
                                <div className="temperature-time">
                                    <img src={temp} alt="temperature"/>
                                    <p>{item.temperature}</p>
                                </div>
                                <div className="temperature-time">
                                    <img src={time} alt="time"/>
                                    <p>{item.time}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Доставка</h1>
                            <p>Вы можете оформить заказ на сумму от 600 рублей, мы доставим его в любой город до пункта
                                выдачи или до двери.</p>
                            <p>Стоимость доставки рассчитывается автоматически в корзине и зависит от вашего города,
                                суммы и веса заказа. Почти всегда доставляем бесплатно.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster richColors position="bottom-center" expand={true}/>
        </>
    );
};

export default ProductPage;