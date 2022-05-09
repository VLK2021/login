import React from 'react';
import {Outlet} from "react-router-dom";

import hero from '../../images/Hero_image.png'
import './LayoutStyle.css';



const Layout = () => {
    return (
        <div className={'layout'}>
            <div className={'layout-img'}><img src={hero} alt="foto"/></div>

            <div className={'layout-outlet'}><Outlet/></div>
        </div>
    );

};

export default Layout;
