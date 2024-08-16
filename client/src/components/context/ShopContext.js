import React, {createContext, useMemo, useState} from 'react';
import {Item} from "../../store/Item";

export const ShopContext = createContext(null);



const ShopContextProvider = (props) => {
    const [currentItems, setCurrentItems] = useState(Item)
    // const [sort, setSort] = useState()

    // const res = useMemo(() =>
    //     [...currentItems].sort((a, b) => {
    //         return sort === "ASCENDING" ? a.price - b.price : b.price - a.price;
    //     }), [currentItems, sort])

    const SortedItems = (sort) => {
        setCurrentItems([...currentItems].sort((a, b) => {
            return sort === "ASCENDING" ? a.price - b.price : b.price - a.price;
        }))
    }

    const buttonClose = () => {
        setCurrentItems(Item)
    }

    const chooseCategory = (category) => {
        // if (category === 'all') {
        //     setCurrentItems(Item)
        //     return
        // }
        setCurrentItems(Item.filter((item) => item.category === category))
    }

    const value = {currentItems, chooseCategory, buttonClose, SortedItems};

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;