import React from 'react';
import style from './myPhoto.module.css';
import {useDispatch, useSelector} from "react-redux";
import {PHOTO_REDUCER, savePhoto} from "../../store/redusers";

export const MyPhoto = () => {
    const { img, photoList } = useSelector(PHOTO_REDUCER)
    const dispatch = useDispatch()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            dispatch(savePhoto(URL.createObjectURL(event.target.files[0])))
        }
    }

    return (
        <div >
            <h3>Задание 2</h3>
            <input type="file" id="input__file" onChange={onImageChange} className={style.inputFile}/>
            <label htmlFor="input__file" className={style.inputFile_button}>Выберите файл</label>
            <div className={style.gallery}>
                {photoList.map(el =>
                    <img
                        className={style.gallery__image}
                        key={el}
                        src={el}
                        alt="noImg"
                    />
                )}
            </div>
        </div>
    );
}

