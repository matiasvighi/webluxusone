import axios from 'axios';
import { useEffect, useState } from 'react';
import logo from '../logo.svg';
import * as React from 'react';

import  {useContext} from 'react'
import UserInfoContext from '../context/UserInfoContext'



function Home(){

    const context = useContext(UserInfoContext);


  

    
    const [saludo, setSaludo] = useState("Cargando...")
    
    let token = {token : context.userid};
   
   
    //console.log("token actual",token);


        
        axios.post("http://localhost:8002/welcome", token)
                
        
        .then((response)=>{
         //   console.log(response.data.name,"response1");
            
            setSaludo(`Welcome,${response.data.name},have a nice day motherfucker`);
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