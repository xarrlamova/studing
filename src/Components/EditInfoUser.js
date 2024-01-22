import React, {useState} from 'react';
import {useEffect} from "react";
import { IoClose } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
export const EditInfoUser = props => {
    const {nameItem, nameForm, showEditForm, onEdit} = props;

    const [item, setItem] = useState(props.valueForm)
    const [isItemDirty, setIsItemDirty] = useState('')
    const [itemError, setItemError] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        if (itemError) {
            setIsFormValid(prevState => false)
        } else {
            setIsFormValid(prevState => true)
        }
    }, [itemError])

    const itemHandler = (e) => {
        setItem(e.target.value)
        const reg = /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig;
        if (!reg.test(e.target.value)) {
            setItemError('Неккоректное значение')
        } else {
            setItemError('');
            setItem(e.target.value);
        }
    }

    const blurHandler = (e) => {
        setIsItemDirty(prevState => true)
    }

    const clickingOnOkButton = () => {
        if (isFormValid) {
            onEdit({
                nameForm: nameForm,
                valueForm: item,
            });
            showEditForm();
        }
    }

    const clickingOnCloseButton = () => {
        showEditForm();
    }

    return (
        <form>
            {(isItemDirty && itemError) && <div className = 'error'>{itemError}</div>}
            <input className="edit-form" placeholder={nameItem}
                   onChange={e => itemHandler(e)} value={item} onBlur={e => blurHandler(e)}/>
            <IoClose className="close-button" onClick={clickingOnCloseButton}/>
            <IoCheckmark aria-disabled={!isFormValid} className="ok-button" onClick={clickingOnOkButton}/>
        </form>
    )
}
