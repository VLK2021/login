import React from 'react';
import {Outlet} from "react-router-dom";
import Users from "../Users/Users";


const Layout = () => {
    return (
        <div>
            <Outlet/>
            <Users/>
        </div>
    );
};

export default Layout;