import React from 'react'
import PopingMenu from './PopingMenu'
import Table from './Table'
import Search from './Search'

export default function StudentTable() {
  return (
    <div>
      <PopingMenu/>
      <Table tableType = "Student"></Table>
    </div>
  )
}
