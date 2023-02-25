import React from 'react';

import {NavLink} from "react-router-dom"

function MainRegister(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <NavLink to="/authenticate">Authenticate</NavLink>
            <NavLink to="/authorize">Authorize</NavLink>
            <NavLink to="/register/register">Register</NavLink>
            <NavLink to="/password-recovery">Password recovery</NavLink>
        </div>
    );
}

export default MainRegister;