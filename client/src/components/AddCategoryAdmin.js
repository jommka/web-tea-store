import React from 'react';

const AddCategoryAdmin = () => {
    return (
        <>
            <div className='panel' id="panel-category">
                <div className="block-input">
                    <input type="text" required spellCheck="false"></input>
                    <label id="admin-label">Введите название</label>
                </div>
                <div className='category-admin'>
                    <div className="block-save">
                        <button>Фото</button>
                        <p>Файл не выбран</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCategoryAdmin;