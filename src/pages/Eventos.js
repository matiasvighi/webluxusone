import { useParams } from "react-router-dom";

function Eventos(){
    let params = useParams();

    return(<>
        <p>EVENTOS</p>
        <p>Paramtro: {params.eventId}</p>
    </>)
}

export default Eventos;