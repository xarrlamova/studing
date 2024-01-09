import React, {useState, useEffect} from 'react';
import { IoCreateOutline } from "react-icons/io5";
import EditInfoUser from "./EditInfoUser";
import editInfoUser from "./EditInfoUser";
const User = props => {
    const [editFirstnameForm, setEditFirstnameForm] = useState(
        false
    );
    const [editLastnameForm, setEditLastnameForm] = useState(
        false
    );

    const showEditFirstnameForm = () => {
        setEditFirstnameForm(!editFirstnameForm)
    }

    const showEditLastnameForm = () => {
        setEditLastnameForm(!editLastnameForm)
    }

    return(
        <div className="userInfo">
            <div className="info">
                <p className='text'>{props.user.firstname}</p>
                <IoCreateOutline className="editButton" onClick={showEditFirstnameForm}/>
                {editFirstnameForm && <EditInfoUser item={props.user.firstname} nameItem="Имя" name="firstname" onEdit={props.onEdit} showEditFirstnameForm={showEditFirstnameForm}/>}
            </div>
            <div className="info">
                <p className='text'>{props.user.lastname}</p>
                <IoCreateOutline className="editButton" onClick={showEditLastnameForm}/>
                {editLastnameForm && <EditInfoUser item={props.user.lastname} nameItem="Фамилия" name="lastname" onEdit={props.onEdit} showEditLastnameForm={showEditLastnameForm}/>}
            </div>

        </div>
    )
    //);hnh;ih;ihluhljhljhbljhbljbkhgbhkbljhnljhnlh.
    //от Ангелины. Ты спрашивал как баг фиксить
}

export default User;