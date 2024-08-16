import React from 'react';
import { Item } from '../store/Item'
import ItemShop from "./ItemShop";


const TeaList = () => {
    const best_tea = Item.filter((tea) => tea.desc === 'best');
    return (
        <>
            {best_tea.map(props  =>
                <ItemShop key={props.id} props={props}/>
            )}
        </>
    );
};

export default TeaList;