import React, {useState} from 'react';
import {useEffect} from "react";
import { IoClose } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import {NAME_REGEX} from "../AddFriend/constants";
import {ValidationInput} from "../ValidationInput";

export const EditInfoUser = props => {
    const {nameItem, nameForm, showEditForm, onEdit} = props;

    const [item, setItem] = useState(props.valueForm)
    const [isItemDirty, setIsItemDirty] = useState('')
    const [itemError, setItemError] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        if (itemError) {
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
        }
    }, [itemError])

    const itemHandler = (e) => {
        setItem(e.target.value)
        if (!(NAME_REGEX.test(e.target.value))) {
             setItemError('Неккоректное значение');
        }
         else {
             setItemError('');
             setItem(e.target.value);
         }
         if (false) {
             console.log('hui')
         }
    }

    const blurHandler = (e) => {
        setIsItemDirty(true)
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
            <ValidationInput className="edit-form" isDirty={isItemDirty} error={itemError} handler={itemHandler} value={item} blurHandler={blurHandler} nameItem={nameItem}/>
            <IoClose className="close-button" onClick={clickingOnCloseButton}/>
            <IoCheckmark aria-disabled={!isFormValid} className="ok-button" onClick={clickingOnOkButton}/>
        </form>
    )
}
