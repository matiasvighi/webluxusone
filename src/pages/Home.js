import axios from 'axios';
import { useEffect, useState } from 'react';
import logo from '../logo.svg';
import * as React from 'react';
import { useParams } from "react-router-dom";




function Home(){

    let params = useParams();

    console.log ("chota")
    const [token,setToken] = React.useState();
    const [saludo, setSaludo] = useState("Cargando...")

    useEffect(() => {
        setToken(params.eventId)


        console.log(token,"token");
        axios.post("http://localhost:8001/welcome",token)
        .then((response)=>{
            console.log(response);
            setSaludo(response.data);
            console.log("pito Duro",saludo,token);
        })
        .catch((error)=>{
            console.log(error);
            setSaludo("Error al cargar el saludo...");
        })
    }, [])
    
    return(<>
        <p>HOME</p>
        <p>{saludo}</p>
        <img src={logo} className="App-logo" alt="logo" />
    </>)
}

export default Home;