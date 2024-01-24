import React from 'react';
import {InfoUser} from "./InfoUser";

export const User = props => {
    const {user, onEdit} = props;
    const {firstname, lastname} = user;


    return(
        <div className="user-info">
            <InfoUser valueForm={firstname}  onEdit={onEdit} nameItem="Имя" nameForm="firstname"/>
            <InfoUser valueForm={lastname} onEdit={onEdit} nameItem="Фамилия" nameForm="lastname"/>
        </div>
    )
}
