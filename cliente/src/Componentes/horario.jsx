import { Link, Route, useLocation, useParams } from "react-router-dom";
import '../index.css';
import React, { useRef } from 'react';
import Axios from "axios";

import { useEffect, useState } from 'react';

class HorarioList {
  constructor(id_horario, dia, hora_inicio, hora_salida) {
    this.id_horario = id_horario
    this.dia = dia;
    this.hora_inicio = hora_inicio
    this.hora_salida = hora_salida
  }
}

export function Horario({consulta}) {
  console.log(consulta)
  const [horario, setAlumnoData] = useState([]);
  const {id} = useParams()
  // const 

    useEffect(() =>{
      Axios.get(consulta)
        .then(response => {
          console.log(response)
          const {horarios} = response.data.data[0];
          setAlumnoData(horarios);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    
    },[])
    console.log(horario)

  var NewHorario = [];
  var contador = 0
  var min = 24;
  var max = 0;

  for (let l = 0; l < horario.length; l++) {
    var array = horario[l].hora_salida - horario[l].hora_inicio;

    if (min > horario[l].hora_inicio) {
      min = horario[l].hora_inicio;
    }
    if (max < horario[l].hora_salida) {
      max = horario[l].hora_salida
    }

    if (array > 1) {
      for (let j = 0; j < array + 1; j++) {
        const nuevoHorarioObjeto = new HorarioList(
          horario[l].id_horario,
          horario[l].dia,
          horario[l].hora_inicio + j,
          horario[l].hora_salida,
        );
        NewHorario.push(nuevoHorarioObjeto);
      }
    } else {
      const nuevoHorarioObjeto = new HorarioList(
        horario[l].id_horario,
        horario[l].dia,
        horario[l].hora_inicio,
        horario[l].hora_salida,
      );
      NewHorario.push(nuevoHorarioObjeto);
      console.log(NewHorario)
    }

  }
  const location = useLocation();
  const datos = location.state
  const days = ["Hora", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  console.log(min, max)
  const hours = [];
  for (let i = 0; i < 25; i++) {
    if (i >= min && i <= max) {
      let hour = i;
      hours.push(hour);
    }
  }
  console.log(hours)
  const dayss = Array.from({ length: 8 }, (_, i) => i);

  return (
    <React.Fragment>
      <table key='1' className=" text-black w-full border-gray-300 rounded-3xl" cellSpacing="0">
        <thead className="custom-thead ">
          <tr className="border border-gray-300">
            {days.map((day, index) => (
              <th scope="col" key={index} className={`w-24`}>{day}</th>
            ))}
          </tr>
        </thead>

        {hours.map((hour, hourIndex) => (

          <thead key={hourIndex} >
            <tr key={hourIndex}>

              {dayss.map((day, dayIndex) => (
                <td key={dayIndex} className={`w- border border-gray-300`}>
                  {dayIndex === 0 ? (
                    <button className="" id={`col${hourIndex}${dayIndex}`}>
                      <div className="p-2">
                        {`${hour}:00`}
                      </div>
                    </button>
                  ) : (
                    NewHorario.map((object) => (
                      (hour === object.hora_inicio && dayIndex === object.dia ? (
                        <Link to={`/GestionMateria${object.id_horario}`}  >
                          <div className="hover:bg-gray-300 p-2">
                            <button className="" id={`col${hourIndex}${dayIndex}`}>
                              <div className="" >{days[day]}-{hour}:00 - {hour + 1}:00</div>
                              <div className="" >{object.dia}</div>
                              <div className="" >{object.hora_inicio}</div>
                            </button>
                          </div>
                        </Link>
                      ) : null

                      )
                    )))
                  }
                </td>
              ))}
            </tr>
          </thead>
        ))}
      </table>
    </React.Fragment>
  );
}