import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'
function Left() {
  return (
    <div className='w-[30%] text-gray-300 bg-black'>
      <Search/>
      <div className="felx-1 overflow-y-auto" style={{maxHeight:"calc(84vh - 8vh)"}}>
        <Users/>
      </div>
      <Logout/>
    </div>
  )
}

export default Left
