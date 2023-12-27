import React, {Component} from 'react';
import avatar from './avatar.jpg'
class Avatar extends Component {
    render() {
        return (
            <div>
                <img
                src={avatar}
                height="300"
                width="250"
                className="Avatar"
                alt="Avatar"
                />
            </div>
        );
    }
}

export default Avatar;