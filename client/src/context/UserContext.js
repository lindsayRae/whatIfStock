import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);

export default ({ children }) => {
  const [user, setUser] = useState(null);

  // const login = (email) => {
  // };

//   const fetchUser = async () => {
//     fetch('/api/me');
//     return user;
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

  return (
      <UserContext.Provider value={{ user, setUser }}>
          {children}
      </UserContext.Provider>
  );
};