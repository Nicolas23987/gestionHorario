import React from "react";
import { NavBar } from "../Componentes/Nav";
function Login() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container-form">
        <form className="form-login" >
          <div class="mb-3">
           <div className="laber-form">
            <label for="exampleInputEmail1" class="form-label"><h3>Correo electronico</h3></label>
           </div>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
          <div class="mb-3 ">
            <div className="laber-form">
             <label for="exampleInputPassword1" class="form-label"><h3>Contraseña</h3></label>
            </div>
            <input type="password" class="form-control" id="exampleInputPassword1"></input>
          </div>
          <div class="mb-3 form-check">
           
            <label class="form-check-label" for="exampleCheck1">Check me out
             <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            </label>
          </div>
          <div className="mb-3">
            <button type="submit" class="btn btn-primary">ingresar</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Login;