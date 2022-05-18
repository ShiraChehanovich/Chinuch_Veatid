import React from 'react';
import ReactDOM from 'react-dom/client';
import './Main.css'
import StudentFile from './StudentFile'
import { Link } from 'react-router-dom'

export default function MenuButton   () {
    const link = () => {
        return(
          // <div className="w-100 text-center mt-3">
          //       <Link to = "/student-file">שכחת סיסמא?</Link>
          //   </div>
             alert("click")
        )
    }
  
    return (
      <div>
      <div className='flex-containerh'>
        <div ><button onClick={link} className='button' > <span>תיק תלמיד</span></button></div>
        <div ><button onClick={link}className='button' ><span>תיק כיתה</span></button></div>
        <div ><button onClick={link}className='button' ><span>תיק מורה</span></button></div>
        </div>
      </div>);
  }
  