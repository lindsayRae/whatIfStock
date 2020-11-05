import React, {useEffect, useState, useContext} from 'react';
import {UserContext} from '../../context/UserContext';

export default () => {

  const {user, setUser} = useContext(UserContext)
  console.log('user', user)
  console.log('setUser', setUser)

    return (
      <div className="main">
        <h1>TSLA</h1>
        <div>Current price: </div>
        <div>You have 1 share with a value of: 240.00</div>  
        <button>Sell</button>
      </div>
    );
  }