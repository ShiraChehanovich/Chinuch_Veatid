import React from 'react'
import PopingMenu from './PopingMenu'
import Table from './Table'
import Search from './Search'
import ComboBox from './ComboBox'
import Tabs from './Tabs'
import './ClassStyle.css'

export default function ClassTable() {
  return (
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