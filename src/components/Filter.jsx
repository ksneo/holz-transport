import React from 'react';
import './Filter.css';

const Filter = (props) => {
    return (
        <div className='Filter'>
            <div className='FilterDate'>
                <label>Выберите дату:
                    <select className='FilterDate-select' >
                        <option value='Сегодня'>Сегодня</option>
                        <option value='Вчера'>Вчера</option>
                        <option value='Текущая неделя'>Текущая неделя</option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default Filter;
