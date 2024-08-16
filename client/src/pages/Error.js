import React from 'react';
import Header from "../components/UI/Header";
import group from '../components/UI/picture/group.svg'
import {MAIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const Error = () => {
    const history = useNavigate()

    return (
        <>
            <Header/>
            <div className="App">
                <div className='ellipse'>
                    <img src={group}/>
                    <p>Кажется, что-то пошло не так!</p>
                    <span>Страница не найдена</span>
                    <button onClick={() => history(MAIN_ROUTE)}>Вернуться</button>
                </div>
            </div>

        </>
    );
};

export default Error;