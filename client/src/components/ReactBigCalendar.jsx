import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getAuth } from "firebase/auth";
import { addDoc, doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
// import { addDoc, doc, setDoc, collection } from "firebase/firestore";
import { firestore } from '../firebase/firebase';
// import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState(events);


  console.log("yaelb")
  const auth = getAuth();
  const UseEmail = auth.currentUser.email;
  console.log(UseEmail)
  
  const studentRef = collection(firestore, "tasks");
  const [studentObjects, setStudentObjects] = useState([]);
  
const getData = async () => {
      var q  = query(studentRef, where("userId", "==", UseEmail));
      var temp=0
      const snapshot = await getDocs(q)
       const  result = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
      snapshot.forEach(doc =>
         {
            // Create a query against the collection
          // const allCapitalsRes = await getDocs.where('TaskDescription', '==', true).get();index.js
           console.log(result[temp].TaskDescription)  
          //  console.log(result[temp].date) 
          //  setStudentObjects(prev => [...prev, doc.data()])
          temp++;
          }
      ) 
    }
    getData()

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };
  return (
    <div className="App">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
