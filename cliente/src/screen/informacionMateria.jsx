import { useLocation } from "react-router-dom"

function Informacion(){
    const location = useLocation()
    console.log(location.state)
    var paralelo = location.state?.paralelo
    var profesor = location.state?.profesor

    return(
        <div>
            <h1>
               Paralelo {paralelo}
            </h1>
            <h1>
                Profesor {profesor}
            </h1>
        </div>
    )
}
export default Informacion;