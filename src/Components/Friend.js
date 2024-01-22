import React from 'react';
export const Friend = (props) => {
     const {user} = props
     const {firstname, lastname, age} = user;
     return (
         (<tr className="friends">
             <td>{firstname}</td>
             <td>{lastname}</td>
             <td>{age}</td>
         </tr>)
     )
}
