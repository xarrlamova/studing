import React, {useState} from 'react';
import { IoClose } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
export const EditInfoUser = props => {
    const {nameItem, nameForm, showEditForm, onEdit} = props;
    const [valueForm, setValueForm] = useState(
        props.valueForm
    )

    const clickingOnOkButton = () => {
        onEdit({
            nameForm: nameForm,
            valueForm: valueForm
        });
        showEditForm();
    }

    const clickingOnCloseButton = () => {
        showEditForm();
    }


    const changeEditForm = (e) => {
        if (e.target.value !== '')
            setValueForm(e.target.value)
    }

    return (
        <form>
            <input className="edit-form" placeholder={nameItem}
                   onChange={changeEditForm}/>
            <IoClose className="close-button" onClick={clickingOnCloseButton}/>
            <IoCheckmark className="ok-button" onClick={clickingOnOkButton}/>
        </form>
    )
}
