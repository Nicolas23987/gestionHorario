import React from "react"
import { useLocation } from "react-router-dom";

function Prueba(){  
    const location = useLocation();
    console.log("location");
    const id = location.state
    return(
        <div>
            <h1>hola Prueba</h1>
            {id}
        </div>
    )
}
export default Prueba;