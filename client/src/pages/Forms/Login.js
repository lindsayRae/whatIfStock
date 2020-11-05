import React, {useEffect, useState} from 'react';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('http://localhost:1234/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        const data = await response.json();
  
        console.log('login data: ', data);
  
        // if (data.message) {
        //   setError(data.message[0].message);
        //   return;
        // }
  
        // setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    
    return (

      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="email"   
            value={email}               
            placeholder="email"  
            onChange={(event) => setEmail(event.target.value)}          
        />
        <input
            type="password"            
            placeholder="password"  
            value={password}  
            onChange={(event) => setPassword(event.target.value)}          
        />
        <div className='text-center'>
          <button type='submit' >Login</button>
        </div>
        <div><a>Sign up here</a></div>
       </form>
      </div>
       
    );
  }
 