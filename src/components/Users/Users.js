import React from 'react';
import {useSelector} from "react-redux";

const Users = () => {

    const {users} = useSelector(state => state.user);

    return (
        <div>
            {
                users.map(us =>
                    <div key={us.id}>
                        {us.email} - {us.password}
                    </div>)
            }
        </div>
    );
};

export default Users;