import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeNumber, SELECTOR_STAR_WARS_HISTORY} from "../../store/redusers";

export const StarWars = () => {

    const { factList, num} = useSelector(SELECTOR_STAR_WARS_HISTORY)
    const dispatch = useDispatch()

    const onChangeNum = (e) => {
        const n = Number(e.target.value)
        if (n <= 5 && n >= 0) {
            dispatch(changeNumber(Number(e.target.value)))
        }
    }

    const print = factList.map((el, index) =>
        index < num? <li key={el}>{el}</li>: null)

    return (
        <div style={{height: 220}}>
            <h3>Задание 1</h3>
            <input
                type="number"
                value={num}
                onChange={onChangeNum}
            />
            <ul>
                {print}
            </ul>
        </div>
    );
}

