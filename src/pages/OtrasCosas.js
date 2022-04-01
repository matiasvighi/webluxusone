import { useParams } from "react-router-dom";

function OtrasCosas(){
    let params = useParams();

    return(<>
        <p>Otras Cosas</p>
        <p>Paramtro: {params.eventId}</p>
    </>)
}

export default OtrasCosas;