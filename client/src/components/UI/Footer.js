import React from 'react';
import {Link} from "react-router-dom";
import {MAIN_ROUTE} from "../../utils/consts";
import icon from "./picture/icon.svg";
import x_logo from "./picture/x logo.svg";
import insta from "./picture/insta.svg";
import youtube from "./picture/youtube.svg";
import linkedIn from "./picture/linkedIn.svg";

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="footer-col">
                    <Link to={MAIN_ROUTE}>
                        <img src={icon} alt="icon" className="imgIconFooter"/>
                    </Link>
                    <ul id="footer-left">
                        <li><Link><img src={x_logo} alt="x logo"/></Link></li>
                        <li><Link><img src={insta} alt="insta"/></Link></li>
                        <li><Link><img src={youtube} alt="youtube"/></Link></li>
                        <li><Link><img src={linkedIn} alt="linkedIn"/></Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <ul id="footer-center">
                        <li><Link>Каталог</Link></li>
                        <li><Link>Коллекции</Link></li>
                        <li><Link>Бренды</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <p>Компания</p>
                    <ul>
                        <li><Link>О компании</Link></li>
                        <li><Link>Новости</Link></li>
                        <li><Link>Отзывы</Link></li>
                        <li><Link>Команда</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <p>Информация</p>
                    <ul>
                        <li><Link>Магазины</Link></li>
                        <li><Link>Условия оплаты</Link></li>
                        <li><Link>Политика</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
);
};

export default Footer;