import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';


//import { UserContext } from '../context/UserContext';

export default () => {
//   const { user } = useContext(UserContext);
// console.log(user)
  return (
        <div className='Nav'>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/login" exact>Login</NavLink>
            <NavLink to="/signup" exact>Create new account</NavLink>
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