import React, {useState} from 'react';
import Friend from "./Friend";
const Friends = (props) => {
    if (props.friends.length > 0)
        return (<tbody >
            {props.friends.map((el) =>
                (<Friend key={el.id} user={el}/>))}
        </tbody>)
    else
        return(<div>
            <h3>Друзей нет :(</h3>
        </div>)
}

export default Friends;