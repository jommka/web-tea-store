import React from 'react';
import submenu from "./picture/submenu.svg";

const Button = ({handleClick, isActive, type}) => {
    return (
        <button onClick={handleClick} className={`menu-button ${isActive ? 'active' : ''}`}>
            <img src={type.img} id="img-button"/>{type.name}
            {isActive ? <img src={submenu} id="submenu"/> : ''}
        </button>
    );
};

export default Button;