import React from 'react'
import RouteBtn from '../RouteBtn'
import Library from './Library'

const Sidebar = () => {
  const routeBtns = [
    {
      path: '/',
      title: 'Trang chủ',
      icon: <i className="fa-solid fa-house"></i>
    },
    {
      path: '/search',
      title: 'Tìm kiếm',
      icon: <i className="fa-solid fa-magnifying-glass"></i>
    },
  ]
  return (
    <div className='w-[500px] h-full'>
      <div className='bg-white mb-[21px] p-[30px] rounded-br-[30px] border-[1px] border-black drop-shadow-lg'>
        <div className='mb-[26px]'>
          <img className='w-[268px]' src={require("../../../assets/logo 2.png")} alt="" />
        </div>
        <div>
          {routeBtns.map((route, index) => {
            return <RouteBtn key={index} title={route.title} path={route.path} icon={route.icon} />
          })}
        </div>
      </div>
      <Library />
    </div>
  )
}

export default Sidebar