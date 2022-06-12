import React from 'react'
import PopingMenu from './PopingMenu'
import Table from './Table'
import Search from './Search'
import ComboBox from './ComboBox'
import Tabs from './Tabs'
import './ClassStyle.css'
import firebase from 'firebase/compat/app';
import { Link } from 'react-router-dom'

export default function ClassTable() {
    const user = firebase.auth().currentUser;  
  return (
    (user === null)?<div >
    אתה לא מחובר... <Link to = "/login">היכנס</Link>
 </div>:
    <div>
      <PopingMenu/>
      <div id = 'flex-container' >
          {/* <div>
            <ComboBox />
          </div>
            <div> */}
                <Tabs></Tabs>
            {/* </div> */}
      </div>
    </div>
  )
}