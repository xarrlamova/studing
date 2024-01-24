import React, {useState} from 'react';
import {IoCreateOutline} from "react-icons/io5";
import {EditInfoUser} from "./EditInfoUser";
export const InfoUser = props => {
    const {valueForm, onEdit, nameItem, nameForm} = props;

    const [isEditForm, setIsEditForm] = useState(
        false
    );

    const showEditForm = () => {
        setIsEditForm(prevState => !prevState)
    }

    return (
        <div className="info">
            <p className="text">{valueForm}</p>
            <IoCreateOutline className="edit-button" onClick={showEditForm}/>
            {isEditForm && <EditInfoUser showEditForm={showEditForm} nameItem={nameItem} valueForm={valueForm} nameForm={nameForm} onEdit={onEdit}/>}
        </div>
    )
}