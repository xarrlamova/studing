import React, {memo, useCallback, useMemo, useState} from 'react';
import {useEffect} from "react";
import {NAME_REGEX} from "./constants";
import {ValidationInput} from "../ValidationInput";

export const AddFriend = props => {
    const {onAdd} = props;

    const [friend, setFriend] = useState(
        {
            firstname: '',
            lastname: '',
            age: '',
        })
    const firstname = 'firstname';
    const lastname = 'lastname';

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')

    const [isNameDirty, setNameDirty] = useState(false)
    const [isSurnameDirty, setSurnameDirty] = useState(false)
    const [isAgeDirty, setAgeDirty] = useState(false)

    const [nameError, setNameError] = useState('поле Имя не может быть пустым')
    const [surnameError, setSurnameError] = useState('поле Фамилия не может быть пустым')
    const [ageError, setAgeError] = useState('поле Возраст не может быть  пустым')

    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        if (nameError || surnameError || ageError) {
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
        }
    }, [nameError, surnameError, ageError])

    const ValidationHandler = (e, setFunction, setError, reg, nameValue) => {
        setFunction(e.target.value)
        if (!reg.test(e.target.value)) {
            setError('Неккоректное значение')
        } else {
            setError('');
            setFriend(prevState => ({...prevState, [nameValue]: e.target.value}));
        }
    }

    const nameHandler = (e) => {
        ValidationHandler(e, setName, setNameError, NAME_REGEX, firstname)
    }

    const surnameHandler = (e) => {
        ValidationHandler(e, setSurname, setSurnameError, NAME_REGEX, lastname)
    }

    const ageHandler = (e) => {
        ValidationHandler(e, setAge, setAgeError, /^[1-9][0-9]*$/, 'age')
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case firstname:
                setNameDirty(true)
                break
            case lastname:
                setSurnameDirty(true)
                break
            case 'age':
                setAgeDirty(true)
                break
            default:
                console.log('default')
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
            <ValidationInput className="add-friends-input" isDirty={isNameDirty} error={nameError} handler={nameHandler} value={name} blurHandler={blurHandler} nameItem='Имя' name={firstname}/>
            <ValidationInput className="add-friends-input" isDirty={isSurnameDirty} error={surnameError} handler={surnameHandler} value={surname} blurHandler={blurHandler} nameItem='Фамилия' name={lastname}/>
            <ValidationInput className="add-friends-input" isDirty={isAgeDirty} error={ageError} handler={ageHandler} value={age} blurHandler={blurHandler} nameItem='Возраст' name={'age'}/>
            <button disabled={!isFormValid} className="add-friends-button" type="button"
                    onClick={clickingOnAddFriendsButton}>Добавить!!
            </button>
        </form>
    )
}
