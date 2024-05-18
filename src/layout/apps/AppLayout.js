import React from 'react'
import Sidebar from '../../components/Apps/Sidebar/Sidebar'
import Navbar from '../../components/Apps/Navbar/Navbar'
import AppContext from '../../context/AppContext'

const AppLayout = ({ children }) => {
  return (
    <div className='h-full bg-white flex gap-[21px]'>
      <Sidebar />
      <div className='bg-white w-full overflow-hidden flex-1 rounded-bl-[30px] mb-[21px] rounded-br-[30px] border-[1px] border-black drop-shadow-lg'>
        <Navbar />
        <div className='h-full'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AppLayout