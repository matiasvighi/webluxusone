import React, { useState } from 'react'
import UserInfoContext from './UserInfoContext'

export default function UserInfoProvider({children}) {
    
    const [userid, setUsData] = useState(null);
    const [username,setUsername] = useState(null);
    const [isadmin, setIsadmin] = useState(null);
    function showMessage(){
        console.log("AAAAAAAAAAA!!!!!!!!")
    }
    return (
        <UserInfoContext.Provider value={{
         
            
            username,
            userid,
            isadmin,
            setUsData,
            setUsername,
            setIsadmin,
            showMessage
        }}>
            {children}
        {/*

        <UserInfoContext.Provider value={{
            userid: userid,
            setUsData: setUsData
        }}>

        */}

        </UserInfoContext.Provider>
    )
}
