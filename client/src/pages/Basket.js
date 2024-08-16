import React, {useContext} from 'react';
import Header from "../components/UI/Header";
import path from '../components/UI/picture/path.svg'
import {Item} from "../store/Item";
import { BasketContext } from "../components/context/BasketContext"
import CartItem from "../components/CartItem";


function EmptyCart () {

    return (
        <div className="empty-cart">
            <div className="empty-cart-item1">
                <span id='span-empty-cart'>В вашей корзине пусто!</span>
                <p>Войдите в систему, чтобы сохранить или получить доступ к уже сохраненным товарам в вашей
                    сумке
                    для покупок.</p>
            </div>
            <div className="empty-cart-item2">
                <p>Войдите в систему, чтобы воспользоваться персональными предложениями!</p>
                <div className="block-button-enter">
                    <button className="main-button" id="button-enter-cart"><span
                        id="span-button-enter-cart">Войти</span></button>
                </div>
                <hr id="basket-hr" width="100%" size="1" color="CAC4D0"/>
                <div className="empty-cart-item3">
                    <p>Итог</p>
                    <p>0.00$</p>
                </div>
                <div className="block-button-enter">
                    <button className="main-button" disabled={true}><span>Оформить заказ</span></button>
                </div>
            </div>
        </div>
    )
}

function FilledCart (props) {
    const cartItems = props.cartItems;
    const total = props.total;

    return (
        <div className="grid-basket">
            <div className="basket-info">
                <p>Продукт</p>
                <p>Цена</p>
                <p>Количество</p>
                <p>Всего</p>
                <hr id="basket-hr" width="100%" size="1" color="CAC4D0"/>
                {Item.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return (
                            <CartItem data={product}/>
                        )
                    }
                })}
                <hr id="basket-hr" width="100%" size="1" color="CAC4D0"/>
            </div>
            <div className="basket-checkout">
                <p><span id="span">Зарегистрируйтесь</span> или <span id="span">войдите</span>, чтобы получить
                    скидку от 5 до 20% на
                    этот заказ.</p>
                <div className="checkbox">
                    <input type="checkbox" id="checkbox-rect" name="check"/>
                    <label htmlFor="checkbox-rect">Перезвоните мне, хочу подтвердить заказ по телефону.</label>
                </div>
                <hr id="basket-hr" width="100%" size="1" color="CAC4D0"/>
                <div className="info-checkout">
                    <p>Итог</p>
                    <p>{total}$</p>
                </div>
                <div className="button">
                    <button className="main-button"><span>Оформить заказ</span></button>
                </div>
            </div>
        </div>
    )
}


const Basket = () => {
    const {cartItems, count, getTotalCartItem} = useContext(BasketContext);
    const total = getTotalCartItem();

    return (
        <>
            <Header/>
            <div className="App">
                <div className="basket">
                    <p>Корзина</p>
                    <div className="basket-path">
                        <p>Главная</p>
                        <img src={path} alt="path"/>
                        <span>Твоя корзина</span>
                    </div>
                </div>
            </div>
            { count > 0 && <FilledCart cartItems={cartItems} total={total}/> }
            { count === 0 && <EmptyCart/> }
        </>
    );
};

export default Basket;