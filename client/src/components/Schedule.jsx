import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import TaskModalPage from './TaskModalPge';

export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <TaskModalPage/>
    </LocalizationProvider>
  );
}
