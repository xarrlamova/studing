import React, {useState, useEffect} from 'react';
const Friend = (props) => {
     const user = props.user
     return (
         (<tr className="friends">
             <td>{user.firstname}</td>
             <td>{user.lastname}</td>
             <td>{user.age}</td>
         </tr>)
     )
}

export default Friend;