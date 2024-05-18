import React from 'react'

const LibraryItem = () => {
  return (
    <div className='flex items-center gap-[16px] mb-[21px]'>
      <img className='w-[80px] h-[80px] rounded-[50%]' src={require("../../../assets/image 28.png")} alt="" />
      <div>
        <p className='font-bold'>Sơn Tùng MTP</p>
        <p className='font-thin'>Nghệ sĩ</p>
      </div>
    </div>
  )
}

export default LibraryItem