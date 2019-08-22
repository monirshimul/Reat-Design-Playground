import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default function Example() {
  return (
    <div>

      <DayPickerInput onDayChange={day => console.log(day)} />
    </div>
  );
}
