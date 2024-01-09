import React, {useState} from 'react';
import { IoClose } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
const EditInfoUser = props => {
    const [item, setItem] = useState(
        props.item
    )

    return (
        <form>
            <input className="editForm" placeholder={props.nameItem}
                   onChange={(e) => {
                       if (e.target.value != '')
                           setItem(e.target.value)
                   }}/>
            <IoClose className="closeButton" onClick={() => {
                if (props.name === "firstname") {
                    props.showEditFirstnameForm();
                }else if (props.name === "lastname"){
                    props.showEditLastnameForm();
                }
            }}/>
            <IoCheckmark className="okButton" onClick={() => {
                props.onEdit({
                    nameItem: props.name,
                    item: item
                });
                if (props.name === "firstname") {
                    props.showEditFirstnameForm();
                }else if (props.name === "lastname"){
                    props.showEditLastnameForm();
                }
            }}/>
        </form>
    )
}

export default EditInfoUser;