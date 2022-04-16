import React, { useState } from 'react'
import UserInfoContext from './UserInfoContext'

export default function UserInfoProvider({children}) {
    
    const [userid, setUsData] = useState(null);
    function showMessage(){
        console.log("AAAAAAAAAAA!!!!!!!!")
    }
    return (
        <UserInfoContext.Provider value={{
            userid,
            setUsData,
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
