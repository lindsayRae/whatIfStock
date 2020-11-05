import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import './Nav.css'


export default () => {

  return (
        <div className='Nav'>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/login" exact>Login</NavLink>
           
          {/* {user
          && <>
              <NavLink to="/" exact>Home</NavLink>              
              <NavLink to="/login" exact>Sign Out</NavLink>
          </>
          }
          {!user
            && <>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/login" exact>Login</NavLink>
          <NavLink to="/signup" exact>Create new account</NavLink>

          </>
          } */}

        </div>
  );
};