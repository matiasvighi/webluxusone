import React, { useState } from 'react'



const Context = React.createContext({})

export function UserInfoContext ({children}) {
const [userid,setUserId]= useState([])

return
    <Context.Provider value={{userid, setUserId}}>
{children}
</Context.Provider>
}


export default Context