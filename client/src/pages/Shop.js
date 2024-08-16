import React, {useContext, useEffect, useState} from 'react';
import Header from "../components/UI/Header";
import TypeItem from "../components/TypeItem";
import empty from '../components/UI/picture/empty-page.svg'
import ItemShop from "../components/ItemShop";
import {Toaster} from "sonner";
import {ShopContext} from "../components/context/ShopContext";
import Selected from "../components/UI/Select";
import close from '../components/UI/picture/close.svg'
import {useNavigate} from "react-router-dom";

function CheckEmptySection () {
    const {currentItems, buttonClose} = useContext(ShopContext)
    const options = [
            { value: 'ASCENDING', label: 'по возрастанию' },
            { value: 'DESCENDING ', label: 'по убыванию' }]

    if (currentItems.length === 0) {
        return (
            <div className="empty">
                <img src={empty} alt={empty}/>
                <p>К сожалению, раздел пуст!</p>
                <span>В данный момент нет активных товаров :c</span>
            </div>
        )
    } else {
        return (
            <>
                <div className="filter">
                    <div className="block-sort">
                        <p>Цена:</p>
                        <Selected options={options} placeholder='по умолчанию'/>
                    </div>
                    <div className='block-count'>
                        <p><span>{currentItems.length}</span>позиций найдено</p>
                        <button onClick={() => buttonClose()}><img src={close} alt="close"/><p>Сбросить фильтр</p></button>
                    </div>
                </div>
                <div className="itemBox">
                    <div className="itemShop">
                        {currentItems.map(item =>
                                <ItemShop key={item.id} props={item}/>)}
                    </div>
                    <Toaster richColors position="bottom-center" expand={true}/>
                </div>
            </>
        )
    }
}

const Shop = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Header/>
            <div className="App">
                <div className="block-text">
                    <h1>Каталог</h1>
                    <p>Выберите категорию товара</p>
                </div>
                <TypeItem/>
                <CheckEmptySection/>
            </div>
        </div>
    );
};

export default Shop;