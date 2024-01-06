import React, {useState, useEffect} from 'react';

// const editInfo = (props) => {
//     super(props);
//     this.name = 'dd';
// }

const UserInfo = props => {
    return(
        <div className="userInfo" >
            <p className = 'text'>{props.name}</p>
            <button className='editButton' type={"button"} ></button>
            <p className = 'text'>{props.lastName}</p>
        </div>
    )
    //);hnh;ih;ihluhljhljhbljhbljbkhgbhkbljhnljhnlh.
    //от Ангелины. Ты спрашивал как баг фиксить
}

export default UserInfo;