import React, { useState , useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';



const AddUSer = (props) => {

    const nameInputRef= useRef();
    const ageInputRef= useRef();

    const [error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName= nameInputRef.current.value;
        const enteredUserAge =ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title:"Invalid input",
                message:"Please enter a valid name and age (non-emty values).",
            });
            return; //inputların içi boş ise submite yapılmaz
        }
        if(+enteredUserAge<1){
            setError({
                title:"Invalid age",
                message:"Please enter a valid age (>0).",
            });
            return; // yaş negatif ise submite yapılmaz.
        }
        props.onAddUser(enteredName,enteredUserAge); // kullanıcının adı ile yaşı app.js ye gönderilir
        nameInputRef.current.value='';
        ageInputRef.current.value='';

    };


    const errorHandler =(event) =>{
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input 
                id="username" 
                type="text" 
                ref={nameInputRef}
                />
                <label htmlFor="age">Age (Years)</label>
                <input 
                id="age" 
                ref={ageInputRef}
                />
                <Button type="submit">Add User</Button>
            </form>
            </Card>
            </div>
    );
};

export default AddUSer;