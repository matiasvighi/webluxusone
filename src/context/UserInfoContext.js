import React, { useState } from 'react'

// que Chori revise esto !!!




const Context = React.createContext({})

export function UserInfoContext ({children}) {
const [userid,setUsData]= useState([]);

const updateUsData = (newUserdata) => {
    setUsData((currentUser) => ({
        ...currentUser,
        userData : newUserdata
    }));
}

return
    <Context.Provider value={{userid, setUsData}}>
{children}
</Context.Provider>
}


export default Context