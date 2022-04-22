import { Route, Routes } from "react-router-dom";
import Casamientos from "./pages/Casamientos";
import Deportes from "./pages/Deportes";
import Eventos from "./pages/Eventos";
import Home from "./pages/Home";
import Modelos from "./pages/Modelos";
import OtrasCosas from "./pages/OtrasCosas";
import Loginn from "./pages/Loginn";
import NewUser from "./pages/NewUser";

function LuxusRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/casamientos" element={<Casamientos />}/>
            <Route path="/eventos/:eventId" element={<Eventos />}/>
            <Route path="/deportes/:eventId" element={<Deportes />}/>
            <Route path="/modelos/:eventId" element={<Modelos />}/>
            <Route path="/otrascosas/:eventId" element={<OtrasCosas />}/>
            <Route path="/loginn" element={<Loginn />}/>
            <Route path="/newuser/" element={<NewUser></NewUser>}></Route>
        </Routes>
    )
}

export default LuxusRoutes;