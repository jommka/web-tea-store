import React, {useContext} from 'react';
import { Types } from '../store/Item'
import {ShopContext} from "./context/ShopContext";

const TypeItem = () => {
    const {chooseCategory} = useContext(ShopContext);
    return (
        <div className="category">
            {Types.map(category =>
                    <button key={category.value} onClick={() => chooseCategory(category.value)}>
                    <img src={category.img} alt="category"/>
                    <p>{category.label}</p>
                    </button>
            )}
        </div>
    );
};

export default TypeItem;