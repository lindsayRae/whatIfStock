import React, {useEffect, useState} from 'react';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    
    return (
        <form className='loginForm' >
        <input
            type="email"            
            className='formControl'
            placeholder="email"            
        />
        <input
            type="password"            
            placeholder="password"            
        />
        <div className='text-center'>
          <button type='submit' >Login</button>
        </div>
        <div><a>Sign up here</a></div>
       </form>
    );
  }
 