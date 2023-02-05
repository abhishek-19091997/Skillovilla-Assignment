import { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [data, setData] = useState([]);
 
  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;


