import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import { firestore } from '../firebase/firebase';
import PlusButton from './PlusButton'
import PopingMenu from './PopingMenu'
import RegularTextField from './RegularTextField'

var idS;
export default function StudentPage(props) {
    idS = props.id;
    const studentRef = collection(firestore, "student");
    const [studentObject, setClassObject] = useState([]);

    // id = props.id;
    const getData = async () => {
        // console.log(idS);
        var q = query(studentRef, where("id", "==",  idS));
        const snapshot = await getDocs(q);
        const  result = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
        console.log(result[0]);
        return result[0]; 
         }      
      React.useEffect(()=>{getData()});

  return (
    <div>
      <PopingMenu/>
      <h2>עריכת סטודנט</h2>
      <div>
      <RegularTextField t = "שם התלמיד"></RegularTextField>
      <RegularTextField t = "תעודת זהות"></RegularTextField>
      <RegularTextField t = "כיתה"></RegularTextField>
      <RegularTextField t = "כתובת"></RegularTextField>
      <RegularTextField t = "תעודת זהות"></RegularTextField>
      <RegularTextField t = "מייל"></RegularTextField>
      <RegularTextField t = "גיל"></RegularTextField>
      <PlusButton />
      </div>
      <h4>מסמכים</h4>
    </div>
  )
}
