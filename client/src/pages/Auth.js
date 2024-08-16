import React from 'react';
import icon from '../components/UI/picture/icon.svg'
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Link, NavLink, useLocation} from "react-router-dom";
import usePasswordToggle from "../hooks/usePasswordToggle";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [PasswordInputType, ToggleIcon] = usePasswordToggle()

    return (
        <>
            <div className="auth">
                <div className="auth-img">
                    <Link to={MAIN_ROUTE}>
                        <img src={icon} alt="logo"></img>
                    </Link>
                </div>
                <form>
                    <h1>{isLogin ? 'Авторизация' : 'Создай свой аккаунт'}</h1>
                    {isLogin ? "" :
                        <div className="block-input">
                        <input type="text" required spellCheck="false"></input>
                        <label>Имя</label>
                        </div>
                    }
                    <div className="block-input">
                        <input type="email" required spellCheck="false"></input>
                        <label>Email</label>
                    </div>
                    <div className="block-input">
                        <input type={PasswordInputType} required spellCheck="false"></input>
                        <label>Пароль</label>
                        <span>
                            {ToggleIcon}
                        </span>
                    </div>
                    <button id="create"><span>{isLogin ? 'Войти' : 'Создать аккаунт'}</span></button>
                    {isLogin ?
                        <p id="enter">Нет аккаунта?<NavLink to={REGISTRATION_ROUTE}><span>Зарегистрируйся</span></NavLink></p>
                        :
                        <p id="enter">Уже есть аккаунт?<NavLink to={LOGIN_ROUTE}><span>Войти</span></NavLink></p>
                    }
                </form>
            </div>
        </>
    );
};

export default Auth;