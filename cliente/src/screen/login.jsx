import React, { useState } from "react";
import { NavBar } from "../Componentes/Nav";
import logoMicrosoft from '../img/logomicrosoft.png'
import { useForm } from 'react-hook-form'
import Axios from 'axios'
import { LoadingScreen } from '../Componentes/loanding.jsx'
import { useNavigate } from "react-router-dom";
import { Footer } from "../Componentes/footer.jsx";
import Cookies from 'js-cookie'




export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Estado para el mensaje de error


  let navigate = useNavigate();


  const [correo, setCorreo] = useState();
  const [password, setPassword] = useState();

  const data = {
    correo: correo,
    password: password
  }
  const instance = Axios.create({
    withCredentials: true
  });

  const onSubmit = handleSubmit(async (data) => {
    setError("");
    setLoading(true);


    try {

      const response = await instance.post('http://localhost:3000/api/auth/admin', {
        correo: data.correo,
        contraseña: data.password,
      }, {
        withCredentials: true // Importante para enviar y recibir cookies
      });

      console.log(response)

      if (response.status === 202) {
        console.log("Inicio de sesión exitoso");

        const cookie = document.cookie
        console.log(cookie)
        localStorage.setItem('my_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjIxNDU0NDQsImVtYWlsIjoiYWRtaW4xQGV4YW1wbGUuY29tIiwiaW1nIjoiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9nZXN0aW9uaG9yYXJpby1mODY3ZS5hcHBzcG90LmNvbS9vL09JUCUyMCgxKS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj05NzQ2ZGM0My1lNTRjLTRlYjUtYjQ1Yi1iNDFlYmIyMmJiY2IiLCJpYXQiOjE3MjE1NDA2NDR9.hlwe7s5p1JB9O03REeipxfnTSwq5WJ5vuyiLM_NAvsI')



        console.log(cookie)
        Cookies.set('my_token', cookie)






      } else {
        setError("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      setError('Credenciales incorrectas');
    } finally {
      setLoading(false);
    }
  });

  return (
    <React.Fragment>
      {loading && <LoadingScreen />}

      <NavBar />
      <div className="container-form flex w-full items-center justify-center ">
        <div className="my-16">
          <div className="w-full flex flex-col items-center justify-center bg-white h-4/5 text-black rounded-r-xl shadow-lg">
            <form onSubmit={onSubmit}>
              <div className="container-ob-form flex w-full flex-col items-start gap-6 pt-3 h-11/12 ">
                <h1 class='text-red-600 font-bold text-xl'>Administracion de horarios Uleam</h1>
                {error && <div className="error-span"> <span className="error-span">{error}</span></div>} {/* Mostrar mensaje de error */}
                {errors.correo && <div className="error-span"> <span className="error-span">Nombre es requerido</span> </div>}
                <input
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  type="email"
                  className="w-full  h-10 pl-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  {...register("correo", { required: true })}
                  placeholder="correo electronico"
                />
                {errors.password && <div className="error-span"> <span className="error-span">Ingrese una contraseña</span></div>}
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full h-10 text-black pl-2"
                  id="exampleInputPassword1"
                  placeholder="contraseña"
                  {...register("password", { required: true })}
                />
                <button type="submit" className="flex bg-red-600 w-20 items-center justify-center text-white">ACCEDER</button>
                <a href="">Olvido su contraseña?</a>
              </div>
            </form>
            <div className="login-divide"></div>
            <div className="">
              <h3 className="m-2 font-serif text-red-700 font-bold text-lg ">Identifíquese usando su cuenta en:</h3>
            </div>
            <div className="ctn-btn-mcsft flex items-center my-4 w-10/12">
              <a href="https://login.microsoftonline.com/uleam.onmicrosoft.com/oauth2/authorize?response_type=code&client_id=2ad44653-fa35-4d81-b320-96befa1b5088&scope=openid%20profile%20email&nonce=N665f3ac73ff2e&response_mode=form_post&state=XWbBuTvnklIcnZt&redirect_uri=https%3A%2F%2Faulavirtualmoodle.uleam.edu.ec%2Fauth%2Foidc%2F&resource=https%3A%2F%2Fgraph.microsoft.com">
                <button className="p-2 rounded-2xl border-black border " >
                  <div className="flex gap-2" >
                    <img className="w-5" src={logoMicrosoft} alt="" />
                    <p>Microsoft 365 Uleam</p>
                  </div>
                </button>
              </a>
            </div>
            <div className="login-divide"></div>
            <div className="btn-idm-cks flex w-11/12 gap-5 my-6">
              <select name="" id="">
                <option className='' value="es">ESPAÑOL (INTERNACIONAL) (ES)</option>
                <option className='' value="es">English (en)</option>
              </select>
              <div className="divisor-vertical"></div>
              <button className="w-full text-white  bg-green-900 px-1" >AVISO DE COOKIES</button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </React.Fragment>
  )
}

