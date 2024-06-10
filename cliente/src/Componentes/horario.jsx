import { Link, Route, useLocation } from "react-router-dom";
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

export function Horario() {
  const [horario, setAlumnoData] = useState([]);

  if (horario.length < 1) {
    const contador = 0;
    contador == contador + 1
    console.log('entro al bucle', contador)
    Axios.get(`http://localhost:3000/api/get/horario/`)
      .then(response => {
        const horariolist = response.data.data;
        setAlumnoData(horariolist);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

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
      <table key='1' className="custom-table" cellSpacing="0">
        <thead className="custom-thead">
          <tr className="fc-first fc-last">
            {days.map((day, index) => (
              <th scope="col" key={index} className={` fc-widget-header`}>{day}</th>
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
                        {`${hour}:00`}
                      </div>
                    </button>
                  ) : (
                    NewHorario.map((object) => (
                      (hour === object.hora_inicio && dayIndex === object.dia ? (
                        <Link to='/GestionMateria' state={{ paralelo: object.paralelo, profesor: object.Profesor }}  >
                          <div className="div-boton">
                            <button className="horario-Button" id={`col${hourIndex}${dayIndex}`}>
                              <div className="div-button" >{days[day]}-{hour}:00 - {hour + 1}:00</div>
                              <div className="div-button" >{object.dia}</div>
                              <div className="div-button" >{object.hora_inicio}</div>
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