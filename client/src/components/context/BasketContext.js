import React, {createContext, useRef, useState} from 'react';
import {Item} from "../../store/Item";
import {toast} from "sonner";

export const BasketContext = createContext(null);

const getDefaultState = () => {
    let cart = {};
    for (let i = 1; i < Item.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const BasketContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultState());
    const [count, setCount] = useState(0);
    const [valueProduct, setValueProduct] = useState(1);

    const addCartItem = (itemId) => {
        setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] + 1}));
        setCount(count + 1);
        toast.success('Товар в корзине!')
    }

    const addCartProduct = () => {
        setValueProduct(valueProduct + 1)
    }

    const removeCartProduct = () => {
        setValueProduct(valueProduct - 1)
    }

    const updateCartProduct = (itemId) => {
        setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] + valueProduct}));
        setCount(count + valueProduct);
        toast.success('Товар в корзине!')
    }

    // const updateCartItem = (itemId, newCount) => {
    //     setCartItems((prevState) => ({...prevState, [itemId]: newCount}));
    //     // setCount(newCount);
    // }

    const removeCartItem = (itemId) => {
        setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] - 1}));
        setCount(count - 1);
    }

    const deleteCartItem = (itemId, newCount) => {
        setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] - newCount}));
        setCount(count - newCount);
    }

    const getTotalCartItem = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Item.find((product) => product.id === Number(item));
                total += cartItems[item] * itemInfo.price;
            }
        }
        return total
    }

    const getSumCartItem = (itemId, newCount) => {
        let total = 0;
        let itemInfo = Item.find((product) => product.id === itemId);
        total = itemInfo.price * newCount;
        return total
    }

    const value = { cartItems, count, addCartItem, removeCartItem,
        getTotalCartItem, getSumCartItem, deleteCartItem, valueProduct, addCartProduct, removeCartProduct, updateCartProduct };

    return (
        <BasketContext.Provider value={value}>
            {props.children}
        </BasketContext.Provider>
    );
};

export default BasketContextProvider;