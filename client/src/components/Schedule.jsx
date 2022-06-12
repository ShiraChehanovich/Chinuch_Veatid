import "./NewStyles.css";
import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import TaskModalPage from './TaskModalPge';
import ReactBigCalendar from './ReactBigCalendar';
import Stack from '@mui/material/Stack';
import PopingMenu from './PopingMenu';
import TaskModalPge from './TaskModalPge';



export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(new Date());

  return (
    // <Stack direction="row-reverse"
    // justifyContent="space-evenly"
    // alignItems="flex-end"
    // spacing={-100}>
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    //   <StaticDatePicker
    //     orientation="landscape"
    //     openTo="day"
    //     value={value}
    //     shouldDisableDate={isWeekend}
    //     onChange={(newValue) => {
    //       setValue(newValue);
    //     }}
    //     renderInput={(params) => <TextField {...params} />}
    //   />
    
    
      <div>
        <div>
        <PopingMenu/>
          <h1>
          יומן אישי</h1>
        </div>
        
        <TaskModalPage/>

<div className="hellowU"> 
<a><ReactBigCalendar/></a>
<h3 className="space"></h3>
  <h6 className="words">hjhjh</h6>
  </div>
     
      
      </div>
      
    // </LocalizationProvider>
    // </Stack>
  );
}
