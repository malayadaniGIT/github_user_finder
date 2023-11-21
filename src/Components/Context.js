import { createContext, useState } from 'react';
const githubContext = createContext();
export default githubContext;

export const Custom = ({ children }) => {
  const [user, setUser] = useState([]);

  return <githubContext.Provider value={{ setUser, user }}>
    {children}
  </githubContext.Provider>;
};



