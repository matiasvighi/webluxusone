import { Route, Routes } from "react-router-dom";
import Casamientos from "./pages/Casamientos";
import Eventos from "./pages/Eventos";
import Home from "./pages/Home";

function LuxusRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/casamientos" element={<Casamientos />}/>
            <Route path="/eventos/:eventId" element={<Eventos />}/>
        </Routes>
    )
}

export default LuxusRoutes;