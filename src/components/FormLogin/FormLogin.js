import React from 'react';
import {useDispatch} from "react-redux";

import './FormLoginStyle.css'
import {addUser} from "../../store/user.slise";


const FormLogin = () => {
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(addUser({email:e.target.email.value, password:e.target.password.value}))
        // console.log({email:e.target.email.value, password:e.target.password.value})
        e.target.reset();


    }

    return (
        <div>
            <form className={'form'} onSubmit={submit}>
                <label>Email: </label>
                <input type="text" name={'email'} placeholder={'enter_email'}/>

                <label>Password: </label>
                <input type="text" name={'password'} placeholder={'enter_password'}/>

                <button>Send</button>
            </form>
        </div>
    );
};

export default FormLogin;