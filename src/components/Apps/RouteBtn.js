import React from 'react'
import { Link } from 'react-router-dom'

const RouteBtn = ({path, title, icon}) => {
  return (
    <div>
      <Link className='inline-flex w-[294px] gap-[22px] mb-[21px] items-center text-[25px] px-[26px] py-[13px] border-[1px] rounded-tr-[30px] rounded-br-[30px] bg-[#EBF6FF] mb' to={path}>
        {icon}
        <span>{title}</span>
      </Link>
    </div>
  )
}

export default RouteBtn