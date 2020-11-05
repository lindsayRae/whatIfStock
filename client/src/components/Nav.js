import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import {UserContext} from '../context/UserContext';

import './Nav.css'


export default () => {
  const { user } = useContext(UserContext);
  console.log(user)
  return (
        <div className='Nav'>
            <NavLink to="/" exact>Home</NavLink>
            {user && 
              <NavLink to="/trade" exact>Trade</NavLink>
            }
            {!user && 
              <NavLink to="/login" exact>Login</NavLink>
            }        
           
        

        </div>
  );
};