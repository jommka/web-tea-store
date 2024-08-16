import React from 'react';
import Selected from "./UI/Select";
import {Types} from "../store/Item";
import bags from "./UI/picture/button-bags.svg";

const AddProductAdmin = () => {
    return (
        <>
            <div className='panel'>
                <div className="left-block-admin">
                    <div className="block-input">
                        <input type="text" required spellCheck="false" id="block-input-admin"></input>
                        <label id="admin-label">Введите название товара</label>
                    </div>
                    <div className="block-input">
                        <input type="text" required spellCheck="false" id="block-input-admin"></input>
                        <label id="admin-label">Введите стоимость товара</label>
                    </div>
                    <div className="block-input">
                        <input type="text" required spellCheck="false" id="block-input-admin"></input>
                        <label id="admin-label">Описание товара</label>
                    </div>
                    <div className="block-save">
                        <button>Фото</button>
                        <p>Файл не выбран</p>
                    </div>
                </div>
                <div className="block-sort-admin">
                    <div className="block-sort">
                        <Selected options={Types} placeholder="категория"/>
                    </div>
                    {/*<div className="block-sort">*/}
                    {/*    <Selected options={Types} placeholder="подкатегория"/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};

export default AddProductAdmin;