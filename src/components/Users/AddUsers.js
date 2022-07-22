import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';



const AddUSer = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            return; //inputların içi boş ise submite yapılmaz
        }
        if(+enteredAge<1){
            return; // yaş negatif ise submite yapılmaz.
        }
        console.log(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');

    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const userAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);

    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input 
                id="username" 
                type="text" 
                onChange={userNameChangeHandler} 
                value={enteredUserName}>
                </input>
                <label htmlFor="age">Age (Years)</label>
                <input 
                id="age" 
                type="number" 
                onChange={userAgeChangeHandler}
                value={enteredAge}>
                </input>
                <Button type="submit">Add User</Button>
            </form></Card>
    );
};

export default AddUSer;