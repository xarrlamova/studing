import React from 'react';
import {Friend} from "./Friend";
export const Friends = props => {
    const {friends} = props;
    if (!friends.length) {
        return(<div>
            <h3>Друзей нет :(</h3>
        </div>)
    }

    return (<tbody >
    {friends.map((el) => (<Friend key={el.id} user={el}/>))}
    </tbody>)
}
