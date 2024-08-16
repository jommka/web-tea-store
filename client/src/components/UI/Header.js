import React, {Component, useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import {BASKET_ROUTE, FAVORITES_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import icon from './picture/icon.svg'
import search from './picture/search.svg'
import user from './picture/user.svg'
import bags_empty from './picture/bags.svg'
import bags_fill from './picture/bags-fill.svg'
import favorite from './picture/favorite.svg'
import {BasketContext} from "../context/BasketContext";


const Header = () => {
    const {count} = useContext(BasketContext);
    let bag;
    if (count === 0) {
        bag = bags_empty
    } else {
        bag = bags_fill
    }

    return (
        <header className="App">
            <Link to={MAIN_ROUTE}>
                <img src={icon} alt="icon" className="imgIcon"/>
            </Link>
            <ul id="header-center">
                <li><NavLink to={MAIN_ROUTE}>Главная</NavLink></li>
                <li><NavLink to={SHOP_ROUTE}>Магазин</NavLink></li>
                <li><Link>О нас</Link></li>
                <li><Link>Контакты</Link></li>
            </ul>
            <ul id="header-right">
                <li>
                    <img src={search} alt="search" className="header-icons"/>
                    {/*<div className="search-box">*/}
                    {/*    <button>*/}
                    {/*        <img src={search} alt="search"/>*/}
                    {/*    </button>*/}
                    {/*<input className="search-text" type="text" placeholder=""/>*/}
                    {/*</div>*/}
                </li>
                <li><NavLink to={LOGIN_ROUTE}>
                    <img src={user} alt="user" className="header-icons"/>
                </NavLink></li>
                <li><NavLink to={BASKET_ROUTE}>
                    <img src={bag} alt="bags" className="header-icons" id="basket-button"/>
                </NavLink></li>
                <li><NavLink to={FAVORITES_ROUTE}>
                    <img src={favorite} alt="favorite" className="header-icons"/>
                </NavLink></li>
            </ul>
        </header>
    );
}


export default Header;