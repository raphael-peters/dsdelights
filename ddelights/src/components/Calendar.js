import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './Calendar.css';

const Calendar = () => {
  return (
  	<div>
  		<p>Please check availability before request</p>
  		<DayPicker />
  	</div>
  	);
}

export default Calendar;