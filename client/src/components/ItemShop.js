import React, {useContext} from 'react';
import {BasketContext} from "./context/BasketContext";
import img from "../styles/img/main img.svg";
import bags from "./UI/picture/button-bags.svg";
import {PRODUCT_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const ItemShop = ({props}) => {
    const { addCartItem } = useContext(BasketContext);
    const history = useNavigate()

    let product = '50 гр'

    if (props.category !== 'tea') {
        product = 'шт'
    }

    return (
        <>
            <div className="wrapper">
                <div className="tea-item">
                    <div className="top">
                        <img src={props.img} id="img" onClick={() => history(PRODUCT_ROUTE + '/' + props.id)}/>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="details">
                                <p>{props.name}</p>
                                <span>{props.price}₽ / {product} </span>
                            </div>
                            <div className="buy">
                                <button><img src={bags} onClick={() => addCartItem(props.id)}/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default ItemShop;