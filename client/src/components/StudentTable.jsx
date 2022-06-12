import React from 'react'
import PopingMenu from './PopingMenu'
import Table from './Table'
import Search from './Search'

export default function StudentTable() {
  let props1 = {
    t:"Student",
    p:"none"
    }
  return (
    <div>
      <PopingMenu/>
      <Table prop = {props1.t} prop2 = {props1.p}></Table>
    </div>
  )
}
