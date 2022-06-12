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
      <Table {...props1}></Table>
    </div>
  )
}
