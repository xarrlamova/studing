import React, {useState, useEffect} from 'react';

const AddUser = props => {
    const [friend, setFriend] = useState(
        {
            firstname: '',
            lastname: '',
            age: 1,
        },)

    return (
        <form>
            <input placeholder="Имя" onChange={(e) => setFriend({firstname: e.target.value})}/>
            <input placeholder="Фамилия" onChange={(e) => setFriend({lastname: e.target.value})}/>
            <input placeholder="Возраст" onChange={(e) => setFriend({age: e.target.value})}/>
            <button type="button" onClick={() => props.onAdd({
                firstname: friend.firstname,
                lastname: friend.lastname,
                age: friend.age,
            })}>Добавить!!</button>
        </form>
    )

    const addFriend = (friend) => {

    }
}

export default AddUser;