import React from 'react'
import ArtistItem from '../ArtistItem'
import SongSearchItem from './SongSearchItem'

const OnSearch = () => {
  return (
    <div className='bg-[rgba(217,217,217,0.7)] px-[40px] w-full py-[20px] h-full '>
      <div className='flex gap-[20px]'>
        <div className='relative w-1/2 mb-[40px]'>
          <h3 className='text-[35px] font-bold mb-[27px]'>Kết quả hàng đầu</h3>
          <div className='p-[30px] relative rounded-[30px] border-[1px] border-black'>
            <img className='w-[150px] h-[150px] rounded-[50%] mb-[21px]' src={require("../../../assets/image 2.png")} alt="" />
            <h2 className='text-[45px]'>Sơn Tùng</h2>
            <p className='text-[30px] font-thin'>Nghệ sĩ</p>
            <button className='absolute w-[82px] h-[82px] bg-black text-[#d9d9d9] right-1/4 text-[35px] rounded-[50px] bottom-10'>
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
        <div className='w-1/3'>
          <h3 className='text-[35px] font-bold mb-[27px]'>Bài hát</h3>
          <div className=''>
            <SongSearchItem name={"Chúng ta của hiện tại"} artist={"Sơn Tùng MTP"} duration={"4:33"} />
            <SongSearchItem name={"Chúng ta của hiện tại"} artist={"Sơn Tùng MTP"} duration={"4:33"} />
            <SongSearchItem name={"Chúng ta của hiện tại"} artist={"Sơn Tùng MTP"} duration={"4:33"} />
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-[35px] mb-[21px]'>Nghệ sĩ</h3>
        <div className='grid grid-cols-5'>
          <ArtistItem role={"Nghệ sĩ"} name={"Lê Bảo Bình"} />
          <ArtistItem role={"Nghệ sĩ"} name={"Lê Bảo Bình"} />
          <ArtistItem role={"Nghệ sĩ"} name={"Lê Bảo Bình"} />
          <ArtistItem role={"Nghệ sĩ"} name={"Lê Bảo Bình"} />
          <ArtistItem role={"Nghệ sĩ"} name={"Lê Bảo Bình"} />
        </div>
      </div>
    </div>
  )
}

export default OnSearch