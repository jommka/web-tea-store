import React, {useState} from 'react';
import Header from "../components/UI/Header";
import bag from '../components/UI/picture/bags-admin.svg'
import info from '../components/UI/picture/info.svg'
import vector from '../components/UI/picture/vector.svg'
import exit from '../components/UI/picture/exit.svg'
import Button from "../components/UI/Button";
import AddProductAdmin from "../components/AddProductAdmin";
import AddCategoryAdmin from "../components/AddCategoryAdmin";


function switchButton (activeButton) {
    switch (activeButton) {
        case 'Добавить продукт':
            return (
                <AddProductAdmin/>
            );
        case 'Добавить категорию товара':
            return (
                <AddCategoryAdmin/>
            );
        case 'История заказов':
            return (
                <p>История заказов</p>
            );
        default:
            return "default";
    }
}

const Admin = () => {
    const [activeButton, setActiveButton] = useState('Добавить продукт');
    const types = [
        {img:bag, name:'Добавить продукт'},
        {img:info, name:'Добавить категорию товара'},
        {img:vector, name:'История заказов'}
    ]
    const [activeIndex, setActiveIndex] = useState(0);
    function funcButton (name, i) {
        setActiveButton(name)
        setActiveIndex(i)
    }

    return (
        <>
            <Header/>
            <div className="App">
                <div className="basket" id="block-path-product">
                    <p>Панель администратора</p>
                </div>
                <div className="block-admin">
                    <div className="menu">
                        {types.map((type, index) => (
                            <Button key={index}
                                    handleClick={() => funcButton(type.name, index)}
                                    isActive={activeIndex === index}
                                    type={type}
                            />
                        ))}
                        <div className="block-exit">
                            <img src={exit}/><p>Выйти</p>
                        </div>
                    </div>
                    <div className="block-panel">
                    {switchButton(activeButton)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;