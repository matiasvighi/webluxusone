import { createContext } from "react";

const initial = {
    userid: null,
    setUsData: () => { },
    showMessage: () => {}
}

const UserInfoContext = createContext(initial);

export default UserInfoContext;