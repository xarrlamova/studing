import React, {Component} from 'react';
import avatar from './avatar.jpg'

function Avatar() {
    return (
        <img
            src={avatar}
            className="avatar"
            alt="Avatar"
        />
    )
}

export default Avatar;