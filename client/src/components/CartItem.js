import React, {useContext, useState} from 'react';
import delete_button from "./UI/picture/delete.svg";
import {BasketContext} from "./context/BasketContext";
import increase from './UI/picture/increase.svg'
import decrease from './UI/picture/decrease.svg'
import Select from "./UI/Select";


const CartItem = (props) => {
    const { id, name, img, price, subcategory } = props.data;
    const { cartItems, addCartItem, removeCartItem, getSumCartItem, deleteCartItem } = useContext(BasketContext);
    const total = getSumCartItem(id, cartItems[id]);

    // const weight = [
    //     {label: "50 г", value: 1},
    //     {label: "100 г", value: 2},
    //     {label: "150 г", value: 3},
    //     {label: "200 г", value: 4},
    //     {label: "250 г", value: 5},
    // ]

    return (
        <>
            <div className="cart-items">
                <img src={img} id="img-cart-items"/>
                <div className="info-product">
                    <p>{name}</p>
                    <span>Подкатегория: {subcategory}</span>
                    <button><img src={delete_button} alt="delete" onClick={() => deleteCartItem(id, cartItems[id])}/></button>
                </div>
            </div>
            <p id="price">{price}$</p>
            <div className="countHandler">
                <button id="button-count">
                    <img src={decrease} onClick={() => removeCartItem(id)}/>
                    <input value={cartItems[id]} readOnly={true} id="input-count"/>
                    {/*<input value={cartItems[id]} onChange={(e) => updateCartItem(id, Number(e.target.value))} id="input-count"/>*/}
                    <img src={increase} onClick={() => addCartItem(id)}/>
                </button>
                <div className="box-select">
                    {/*<Select weight={weight}/>*/}
                </div>
            </div>
            <p id="price">{total}$</p>
        </>
    );
};

export default CartItem;