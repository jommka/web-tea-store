import React, {useEffect} from 'react';
import Header from "../components/UI/Header";
import img from "../styles/img/main img.svg"
import pic_1 from "../styles/img/picture_1.jpg"
import pic_2 from "../styles/img/picture_2.jpg"
import left_line from "../components/UI/picture/left-line.svg"
import right_line from "../components/UI/picture/right-line.svg"
import tea_left from "../styles/img/tea-left.jpg"
import tea_right from "../styles/img/tea-right.jpg"
import TeaList from "../components/TeaList";
import {Toaster} from "sonner";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";


const Main = () => {
    const history = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <main className="background">
                <Header/>
                <div className="App">
                    <div className="container">
                        <div className="main-info">
                            <h1>Начни свой день с чашки чая</h1>
                            <p>Мы стремимся подарить вам не просто чай, а уникальный опыт, который наполнит вашу жизнь
                                гармонией и красотой.</p>
                        </div>
                        <div id="main-img">
                            <img src={img} alt="img"/>
                        </div>
                    </div>
                </div>
            </main>
            <main className="Main">
                <ul className="tea-main">
                    <li className="block"><img src={pic_1} alt="tea"/></li>
                    <li className="block-info">
                        <p>Выдержанный в традициях, сваренный для сегодняшнего дня</p>
                        <button className="main-button"><span>Купить сейчас</span></button>
                    </li>
                    <li className="block-info">
                        <p>Заваривайте чай постепенно, чтобы создать ощущение спокойствия.
                            Ощутите безмятежность чая в "Название", где каждый глоток дарит момент спокойствия и
                            наслаждения</p>
                    </li>
                    <li className="block"><img src={pic_2} alt="pic_2"/></li>
                </ul>
            </main>

            <main className="Main">
                <div className="list-best-tea">
                    <div className="item1">
                        <img src={left_line}/>
                        <p>Лучшие предложения</p>
                        <img src={right_line}/>
                    </div>
                    <TeaList/>
                    <div className="item2">
                        <button className="main-button" onClick={() => history(SHOP_ROUTE)}><span>Посмотреть еще</span></button>
                    </div>

                </div>
            </main>
            <Toaster richColors position="bottom-center" expand={true}/>
            <hr width="100%" size="1" color="CAC4D0"/>
            <main>
                <div className="grid-info">
                    <div className="info-categories">
                        <div className="card">
                            <img src={tea_left}/>
                            <div className="info">
                                <p>Посуда и акссесуары</p>
                            </div>
                        </div>
                        <p>В карте представлены чайники, пиалы, гайвани, чахаи, чахэ, чабани и многое другое.</p>
                    </div>
                    <div id="img-plantation">
                        <p>Ваш идеальный чай ждет вас</p>
                        <button className="main-button"><span>Заказать</span></button>
                    </div>
                    <div className="info-categories">
                        <p id="right">Белый, зеленый, желтый, красный, улуны или пуэры - описания которых вы можете прочитать в
                            соответствующей категории.</p>
                        <div className="card">
                            <img src={tea_right}/>
                            <div className="info">
                                <p>Чай</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
