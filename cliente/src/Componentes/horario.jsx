// import React from "react"
import { Link, Route, useLocation } from "react-router-dom";
import { NavBar } from "./Nav.jsx";
import '../index.css';
import React, { useRef } from 'react';
import Axios from "axios";

import { useEffect, useState } from 'react';
import axios from 'axios';


class HorarioList{
    constructor(paralelo,color,dia,horaInicio,horaFin, Profesor,nombre){
        this.paralelo = paralelo
        this.dia = dia;
        this.horaInicio = horaInicio
        this.horaFin = horaFin
        this.Profesor = Profesor
        this.nombre = nombre;    
    }
}

const horario = [
new HorarioList('A', 1, 3, 7, 'Alex Marin', 'Ing Requisitos'),
new HorarioList('B', 1, 1, 8, 'Ing.Junior Zamora', 'Aplicaciones para el cliente web'),
new HorarioList('C', 2, 2, 4, 'Sendon Juan', 'Redes de computadora'),
new HorarioList('A', 7, 1, 2, 'Alex Marin', 'Ing Requisitos'),
new HorarioList('B', 3, 4, 3, 'Sin profesor', 'Ing Requisitos'),
new HorarioList('A', 3, 1, 8, 'Ing.Junior Zamora', 'Aplicaciones para el cliente web'),
new HorarioList('A', 2, 2, 4, 'Sendon Juan', 'Redes de computadora'),
new HorarioList('B', 7, 1, 2, 'Alex Marin', 'Ing Requisitos'),
]




var NewHorario = [];
var contador = 0
for (let l = 0; l < horario.length; l++) {
    var array = horario[l].horaFin - horario[l].horaInicio;
    if (array > 1) {
      for (let j = 0; j < array+1; j++){

        const nuevoHorarioObjeto = new HorarioList(
          horario[l].paralelo,
          horario[l].color,
          horario[l].dia,
          horario[l].horaInicio+j,
          horario[l].horaFin,
          horario[l].Profesor,
          horario[l].nombre  
        );
        NewHorario.push(nuevoHorarioObjeto);
        console.log(NewHorario)
      } 
    }else{ 
      // console.log('helloworder');
      const nuevoHorarioObjeto = new HorarioList(
        horario[l].paralelo,
        horario[l].color,
        horario[l].dia,
        horario[l].horaInicio,
        horario[l].horaFin,
        horario[l].Profesor,
        horario[l].nombre  
      );
      NewHorario.push(nuevoHorarioObjeto);
      console.log(NewHorario)
    }
  }


export function Horario(){ 
  const [alumnoData, setAlumnoData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/get/horario')
      .then(response => {
        setAlumnoData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); 

    const location = useLocation();
    const datos = location.state
    const days = ["Hora", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab","Dom"];
    const hours = Array.from({ length: 25 }, (_, i) => (i < 10 ? `0${i}:00` : `${i}:00`));
    const dayss = Array.from({ length: 8 }, (_, i) => i);

    const col11 = useRef(null);

    const changeParagraphContent = () => {
      if (col11.current) {
        col11.current.textContent = 'Nuevo contenido';
      }
    }
  return (
    <React.Fragment>
    <div className="calendar fc fc-ltr" id="calendar" bis_skin_checked="1">
        <div className="fc-content"  bis_skin_checked="1">
          <div className="fc-view fc-view-agendaWeek fc-agenda" unselectable="on" bis_skin_checked="1">
            <table key='1' className="fc-agenda-days fc-border-separate" cellSpacing="0">
              <thead>
                <tr className="fc-first fc-last">
                  {days.map((day, index) => (
                    <th key={index} className={` fc-widget-header`}>{day}</th>
                  ))}
                </tr>
              </thead>
   
            {hours.map((hour, hourIndex) => (
            <thead key={hourIndex} >
                <tr key={hourIndex}>
        
                    {dayss.map((day, dayIndex) => (
                        <td key={dayIndex} className={`fc-col${day} fc-widget-content fc-hour-cell`}>    
                            {dayIndex === 0 ? (
                                    <button className="horario-Button" id={`col${hourIndex}${dayIndex}`}>
                                        <div className="div-button">
                                         {hour}
                                        </div>
                                    </button>      
                                ) : (
                                 NewHorario.map((object) => (
                                    (hourIndex === object.horaInicio && dayIndex === object.dia ? (
                                          <Link to='/GestionMateria' state={{paralelo: object.paralelo, profesor: object.Profesor}}  >
                                            <div className="div-boton">
                                                <button className="horario-Button" id={`col${hourIndex}${dayIndex}`}>
                                                    <div className="div-button" >{days[day]}-{hourIndex}:00 - {hourIndex+1}:00</div> 
                                                    <div className="div-button" >{object.nombre}</div> 
                                                    <div className="div-button" >{object.Profesor}</div> 
                                                </button>                    
                                            </div>
                                          </Link>
                                        ): null
                                    
                                    )
                                )))
                            }
                        </td>
                    ))}
                </tr>
            </thead>
            ))}
        </table>
    </div> 
</div>
</div>
</React.Fragment>
  );
}


