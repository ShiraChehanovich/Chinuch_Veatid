import React from 'react'
import PopingMenu from './PopingMenu'
import Table from './Table'
import Search from './Search'
import SecondTable from './SecondTable'

export default function StaffTable() {
  let props1 = {
    t:"Staff",
    p:"none"
    }
  return (
    <div>
      {/* <Search/> */}
      <PopingMenu/>
      <Table prop = {props1.t} prop2 = {props1.p}></Table>
    </div>
  )
}