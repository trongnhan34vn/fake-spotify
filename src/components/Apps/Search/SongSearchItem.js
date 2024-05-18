import React from 'react'

const SongSearchItem = ({name, duration, artist}) => {
  return (
    <div className='flex items-center justify-between w-full mb-[21px]'>
      <div className='flex items-center gap-5'>
        <img className='w-[62px] h-[62px] rounded-[10px]' src={require("../../../assets/image 2.png")} alt="" />
        <div className=''>
          <p>{name}</p>
          <p className='font-thin'>{artist}</p>
        </div>
      </div>
      <div>
        <p>{duration}</p>
      </div>
    </div>
  )
}

export default SongSearchItem