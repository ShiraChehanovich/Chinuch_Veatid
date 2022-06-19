import "./NewStyles.css";
import * as React from 'react';
import ReactBigCalendar from './ReactBigCalendar';
import PopingMenu from './PopingMenu';
import TaskModalPge from './TaskModalPge';
import firebase from 'firebase/compat/app';
import { Link } from "react-router-dom";

export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(new Date());
<<<<<<< HEAD
  const [eventsData, setEventsData] = React.useState([]);
=======
  const user = firebase.auth().currentUser;  
>>>>>>> main

  return (
    (user === null)?<div >
    אתה לא מחובר... <Link to = "/login">היכנס</Link>
 </div>:
    <div>
      <div>
        <div>
        {/* <div><h1 className="day">יומן אישי</h1></div> */}
        <PopingMenu/>
<<<<<<< HEAD
       
        
        </div>
        

        
<div className="hellowU"> 

<h3 className="space"><TaskModalPge/></h3>

<a>
  
  <div><ReactBigCalendar eventsData={eventsData} setEventsData={setEventsData}/></div>
  </a>
 
   <h6 className="words"></h6>
  </div>
=======
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
>>>>>>> main
      </div>
    </div>
  );
}