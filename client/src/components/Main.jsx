import React from 'react'
import Dashboard from './Dashboard'
import DashboardMenu from './DashboardMmenu'
import './Main.css'



export default function Main() {
  return (
      <div width="100%">
        <div className='flex-container'>
            <div className='locatoin'>
                 <DashboardMenu />
            </div>
            <div >
                <div className='right-aligned'>
                <img  src="https://chv.org.il/wp-content/uploads/2019/06/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%95%D7%9C%D7%91_2-1024x251.png" width="40%"></img>
                </div>
            </div>
        </div>
        <div>
            <h1> תפריט</h1>
            <hr />
        <br></br>
        <div className='flex-containerh'>
        <div ><button className='button' > <span><b>תיק תלמיד</b></span></button></div>
        <div ><button className='button' ><span><b>תיק כיתה</b></span></button></div>
        <div ><button className='button' ><span><b>תיק מורה</b></span></button></div>
        </div>
        </div>
      </div>
  )
}
