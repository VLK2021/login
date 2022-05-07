import React from 'react';

import './FormLoginStyle.css'

const FormLogin = () => {
    return (
        <div>
            <form className={'form'}>
                <div>
                    <label>Email: </label>
                    <input type="text" placeholder={'enter email'}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" placeholder={'enter password'}/>
                </div>
                <button>Send</button>
            </form>
        </div>
    );
};

export default FormLogin;