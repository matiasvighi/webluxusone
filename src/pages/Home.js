import axios from 'axios';
import { useEffect, useState } from 'react';
import logo from '../logo.svg';

function Home(){

    const [saludo, setSaludo] = useState("Cargando...")

    useEffect(() => {
        axios.get("http://localhost:8000/hello/maty")
        .then((response)=>{
            console.log(response);
            setSaludo(response.data);
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