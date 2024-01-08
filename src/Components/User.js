import React, {useState, useEffect} from 'react';

const User = props => {
    return(
        <div className="userInfo" >
            <p className = 'text'>{props.user.firstname}</p>
            <button className='editButton' type={"button"}></button>
            <p className = 'text'>{props.user.lastname}</p>
        </div>
    )
    //);hnh;ih;ihluhljhljhbljhbljbkhgbhkbljhnljhnlh.
    //от Ангелины. Ты спрашивал как баг фиксить
}

export default User;