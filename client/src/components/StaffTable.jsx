import React from 'react'
import PopingMenu from './PopingMenu'
import Table from './Table'
import Search from './Search'
import SecondTable from './SecondTable'

export default function StaffTable() {
  return (
    <div>
      {/* <Search/> */}
      <PopingMenu/>
      <Table tableType="Staff"></Table>
    </div>
  )
}