import { useParams } from "react-router-dom";

function Modelos(){
    let params = useParams();

    return(<>
        <p>EVENTOS</p>
        <p>Paramtro: {params.eventId}</p>
    </>)
}

export default Modelos;