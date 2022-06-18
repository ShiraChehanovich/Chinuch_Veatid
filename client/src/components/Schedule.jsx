import "./NewStyles.css";
import * as React from 'react';
import ReactBigCalendar from './ReactBigCalendar';
import PopingMenu from './PopingMenu';
import TaskModalPge from './TaskModalPge';
import firebase from 'firebase/compat/app';
import { Link } from "react-router-dom";

export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(new Date());
  const user = firebase.auth().currentUser;  

  return (
    (user === null)?<div >
    אתה לא מחובר... <Link to = "/login">היכנס</Link>
 </div>:
    <div>
      <div>
        <div>
        <PopingMenu/>
          <h1>
          יומן אישי
          </h1>
        </div>      
        <TaskModalPge/>
        <div className="hellowU"> 
        <a><ReactBigCalendar/></a>
        <h3 className="space"></h3>
         <h6 className="words"></h6>
         </div>
      </div>
    </div>
  );
}