import React, {useState} from 'react';

const AddFriend = props => {
    const [friend, setFriend] = useState(
        {
            firstname: '',
            lastname: '',
            age: '',
        },)

    return (
        <form>
            <input placeholder="Имя"  onChange={(e) => setFriend(state => ({...state, firstname: e.target.value}))}/>
            <input placeholder="Фамилия" onChange={(e) => setFriend(state => ({...state, lastname: e.target.value}))}/>
            <input placeholder="Возраст" onChange={(e) => setFriend(state => ({...state, age: e.target.value}))}/>
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

export default AddFriend;