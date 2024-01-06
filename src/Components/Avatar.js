import React, {Component} from 'react';
import avatar from './avatar.jpg'

export const Avatar = () => {
    return (
        <img
            src={avatar}
            className="avatar"
            alt="Avatar"
        />
    )
}
