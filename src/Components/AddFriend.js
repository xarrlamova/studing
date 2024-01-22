import React, {useState} from 'react';
import {useEffect} from "react";

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
    const [iAgeError, setIAgeError] = useState('поле Возраст не может быть  пустым')

    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        if (nameError || fNameError || iAgeError) {
            setIsFormValid(prevState => false)
        } else {
            setIsFormValid(prevState => true)
        }
    }, [nameError, fNameError, iAgeError])

    const nameHandler = (e) => {
        setName(e.target.value)
        const reg = /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig;
        if (!reg.test(e.target.value)) {
            setNameError('Неккоректное имя')
        } else {
            setNameError('');
            setFriend(state => ({...state, firstname: e.target.value}));
        }
    }

    const fNameHandler = (e) => {
        setFName(e.target.value)
        const reg = /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig;
        if (!reg.test(e.target.value)) {
            setFNameError('Неккоректное значение')
        } else {
            setFNameError('');
            setFriend(state => ({...state, lastname: e.target.value}));
        }
    }

    const iAgeHandler = (e) => {
        setIAge(e.target.value)
        const reg = /^[1-9][0-9]*$/;
        if (!reg.test(e.target.value) || +(e.target.value) > 110) {
            setIAgeError('Неккоректное значение')
        } else {
            setIAgeError('');
            setFriend(state => ({...state, age: e.target.value}));
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'firstname':
                setNameDirty(prevState => true)
                break
            case 'lastname':
                setFNameDirty(prevState => true)
                break
            case 'age':
                setIAgeDirty(prevState => true)
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
            <input className="add-friends-input" onChange={e => fNameHandler(e)} value={fName} onBlur={e => blurHandler(e)} name = 'lastname' placeholder="Фамилия" />
            {(isIAgeDirty && iAgeError) && <div className = 'error'>{iAgeError}</div>}
            <input className="add-friends-input" onChange={e => iAgeHandler(e)} value={iAge} onBlur={e => blurHandler(e)} name = 'age' placeholder="Возраст"/>
            <button disabled={!isFormValid} className="add-friends-button" type="button" onClick={clickingOnAddFriendsButton}>Добавить!!</button>
        </form>
    )
}
