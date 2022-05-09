import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import './FormLoginStyle.css'
import {addUser} from "../../store/user.slise";


const FormLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {users} = useSelector(state => state.user);

    const submit = (e) => {
        e.preventDefault();

        if (users.find(el => el.login === e.target.login.value)) {
            navigate('/user');
        } else {
            navigate('/guest');
        }

        dispatch(addUser({login: e.target.login.value, password: e.target.password.value}));
        e.target.reset();
    };

    return (
        <div>
            <form className={'form'} onSubmit={submit}>
                <label>Login: </label>
                <input type="text" name={'login'} placeholder={'enter_login'}/>

                <label>Password: </label>
                <input type="text" name={'password'} placeholder={'enter_password'}/>

                <button>Send</button>
            </form>
        </div>
    );
};
export default FormLogin;