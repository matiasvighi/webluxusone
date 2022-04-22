import { createContext } from "react";

const initial = {
    username:null,
    userid: null,
    isadmin:null,

    setUsData: () => {},
    setUsername: () =>{},
    setUserid:() => {},
    showMessage: () => {}
}

const UserInfoContext = createContext(initial);

export default UserInfoContext;