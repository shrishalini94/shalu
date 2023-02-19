import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import './calender.css';


const Calender = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className='cal'>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        // mask='____/__/__'
        variant='static'
        orientation='portrait'
        value={value}
        disableFuture
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => {
          <TextField {...params} />;
        }}
        
      />
    </LocalizationProvider>
    </div>

    
  );
};

export default Calender;
