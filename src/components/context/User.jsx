import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({children})=>{
    const [isLogin, setIsLogin] = useState(localStorage.getItem('userToken')? true : false)
    const [userData, setUserData] = useState({});
  
    useEffect(()=>{
      const token = localStorage.getItem('userToken');
      if(token){
        const decodedToken = jwtDecode(token);
        setUserData(decodedToken);
        setIsLogin(true);
      }
    },[]);
  
    
   return (
    <UserContext.Provider value={{isLogin,setIsLogin, userData,setUserData }}>
        {children}
    </UserContext.Provider>
   )
}


export default UserContextProvider;