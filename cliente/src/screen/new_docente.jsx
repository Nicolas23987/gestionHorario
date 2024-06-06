import { NavBar } from "../Componentes/Nav"
import React from "react"
export const Nuevo_Docente = () =>{
    


    return(
        <React.Fragment>
            <NavBar/>
            <div>
                <div>
                    <form action="">
                        <input 
                            className="form-action"
                            type="text"
                            placeholder="Nombre del docente"
                            // value={Nombre}
                            onSubmit={(e) => {e.target.value}}                        
                        />
                        <input
                            className="form-action"
                            onClick={(e) => {e.target.value}}
                        />
                        <input
                        
                        />
                        <input
                        
                        />
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}    