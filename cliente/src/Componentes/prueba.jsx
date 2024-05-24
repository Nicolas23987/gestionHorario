import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importa los estilos de react-datepicker
import './DatePicker.css'; // Importa tus estilos personalizados si los tienes

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Estado para almacenar la fecha seleccionada

  return (
    <div className="datepicker-container">
      <DatePicker
        selected={selectedDate} // Propiedad para establecer la fecha seleccionada
        onChange={(date) => setSelectedDate(date)} // Función para actualizar el estado cuando se selecciona una fecha
        showTimeSelect // Opcional: Mostrar selección de hora
        dateFormat="dd/MM/yyyy" // Opcional: Formato de fecha
        placeholderText="Select a date" // Opcional: Texto del placeholder
      />
    </div>
  );
};

export default DatePickerComponent;