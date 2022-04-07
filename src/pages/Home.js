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
    let tokenl = {token : params.eventId}
    console.log("variable local token",tokenl);
    
       


        console.log("token state",tokenl,"token state");
        axios.post("http://localhost:8002/welcome", tokenl)
                
        
        .then((response)=>{
            console.log(response.data.name,"response1");
            
            setSaludo(`Welcome,${response.data.name},have a nice day motherfucker`);
            console.log("pito Duro",saludo,token);
        })
        .catch((error)=>{
            console.log("error-",error,"-error");
            setSaludo("Error al cargar el saludo...");
        })
 
    
    return(<>
        <p>HOME</p>
        <p>{saludo}</p>
        <img src={logo} className="App-logo" alt="logo" />
    </>)
}

export default Home;