import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";


const Users = () => {
    const {users} = useSelector(state => state.user);

    return (
        <div>
            You is oure client
            {
                users.map(us =>
                    <div key={us.id}>
                        {us.id} {us.login} {us.password}
                    </div>)
            }
            <NavLink to={'/'}>
                <button>Go back</button>
            </NavLink>
        </div>
    );
};

export default Users;