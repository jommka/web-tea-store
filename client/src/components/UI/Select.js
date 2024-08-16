import React, {useContext, useMemo, useState} from 'react';
import {Item} from "../../store/Item";
import Select from 'react-select'
import {ShopContext} from "../context/ShopContext";

const Selected = ({options, placeholder}) => {
    // const [selected, setSelected] = useState('ASCENDING')
    const {SortedItems} = useContext(ShopContext)


    const sortPost = (selectedOption) => {
        SortedItems(selectedOption.value)
    }

    return (
        <Select options={options} onChange={sortPost} classNamePrefix='custom-select' placeholder={placeholder}/>
    );
};

export default Selected;