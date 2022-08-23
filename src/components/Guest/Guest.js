import React from 'react';
import {NavLink} from "react-router-dom";


const Guest = () => {
    return (
        <div>
            this is a guest's page!!!

            <NavLink to={'/'}>
                <button>Go back</button>
            </NavLink>
        </div>
    );
};

export default Guest;