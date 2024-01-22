import React, {useState} from 'react';

export const AddFriend = props => {
    const {onAdd} = props;

    const [friend, setFriend] = useState(
        {
            firstname: '',
            lastname: '',
            age: '',
        })

    const [name, setName] = useState('')
    const [fName, setFName] = useState('')
    const [iAge, setIAge] = useState('')

    const [isNameDirty, setNameDirty] = useState(false)
    const [isFNameDirty, setFNameDirty] = useState(false)
    const [isIAgeDirty, setIAgeDirty] = useState(false)

    const [nameError, setNameError] = useState('поле Имя не может быть пустым')
    const [fNameError, setFNameError] = useState('поле Фамилия не может быть пустым')
    const [iAgeError, setIAgeError] = useState('поле озраст не может быть  пустым')

    const nameHandler = (e) => {
        setName(e.target.value)
        const reg = /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig;
        if (!reg.test(String(e.target.value))) {
            setNameError('Неккоректное имя')
        } else {
            setNameError('')
        }
    }


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'firstname':
                setNameDirty(true)
                break
            case 'lastname':
                setFNameDirty(true)
                break
            case 'age':
                setIAgeDirty(true)
                break
        }
    }

    const clickingOnAddFriendsButton = () => {
        onAdd({
            firstname: friend.firstname,
            lastname: friend.lastname,
            age: friend.age,
        })
    }


    return (
        <form>
            {(isNameDirty && nameError) && <div className = 'error'>{nameError}</div>}
            <input className="add-friends-input" onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name = 'firstname' placeholder="Имя" />
            {(isFNameDirty && fNameError) && <div className = 'error'>{fNameError}</div>}
            <input className="add-friends-input" value={fName} onBlur={e => blurHandler(e)} name = 'lastname' placeholder="Фамилия" onChange={(e) => setFriend(state => ({...state, lastname: e.target.value}))}/>
            {(isIAgeDirty && iAgeError) && <div className = 'error'>{iAgeError}</div>}
            <input className="add-friends-input" value={iAge} onBlur={e => blurHandler(e)} name = 'age' placeholder="Возраст" onChange={(e) => setFriend(state => ({...state, age: e.target.value}))}/>
            <button className="add-friends-button" type="button" onClick={clickingOnAddFriendsButton}>Добавить!!</button>
        </form>
    )
}
