import React from 'react'

const ArtistItem = ({name, role}) => {
  return (
    <div className='cursor-pointer'>
      <img className='w-[190px] h-[190px] rounded-[50%] mb-[16px]' src={require("../../assets/image 2.png")} alt="" />
      <div>
        <p className='text-[20px] leading-5 mb-1'>{name}</p>
        <p className='font-thin'>{role}</p>
      </div>
    </div>
  )
}

export default ArtistItem