import React from 'react'

const Library = () => {
  return (
    <div className='bg-white mb-[21px] p-[30px] rounded-br-[30px] border-[1px] rounded-tr-[30px] border-black drop-shadow-lg'>
      <div className='flex items-center justify-between mb-[21px]'>
        <div className='inline-flex w-[294px] gap-[22px] items-center text-[25px] px-[26px] py-[13px] border-[1px] rounded-tr-[30px] rounded-br-[30px] bg-[#EBF6FF]'>
          <i class="fa-regular fa-folder-open"></i>
          <p>Thư viện</p>
        </div>
        <div className='flex items-center'>
          <button className='w-[30px] h-[30px]  bg-black rounded-[50%] text-[18px] text-white'><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <div className='w-full bg-[#f2f2f2] border-[1px] mb-[40px] border-[rgba(0,0,0,0.2)] rounded-[30px] py-[15px] px-[30px]'>
        <div className='mb-[32px]'>
          <p>Tạo danh sách phát đầu tiên của bạn</p>
          <p className='font-thin'>Rất dễ, Chúng tôi sẽ giúp bạn!</p>
        </div>
        <div className='mb-[168px]'>
          <button className="py-[10px] px-[32px] rounded-[500px] border-[rgba(255,255,255,0.8)] border-[1px] bg-primary-bg ">Tạo danh sách phát mới</button>
        </div>
      </div>
      <div className='mb-[40px]'>
        <div className='flex justify-between mb-[21px]'>
          <p className='capitalize'>Pháp lý</p>
          <p className='capitalize'>trung tâm an toàn và quyền riêng tư</p>
        </div>
        <div className='flex justify-between mb-[21px]'>
          <p className='capitalize'>Chính sách và Quyền riêng tư</p>
          <p className='capitalize'>Cookie</p>
        </div>
        <div className='flex justify-between mb-[21px]'>
          <p className='capitalize'>Giới thiệu Quảng Cáo</p>
          <p className='capitalize'>Hỗ trợ tiếp cận</p>
        </div>
      </div>
      <div>
        <button className="flex gap-[10px] p-[10px] border-[rgba(255,255,255,0.8)] border-[1px] bg-primary-bg rounded-[500px] items-center"><i class="fa-solid fa-earth-americas"></i> <span>Tiếng Việt</span></button>
      </div>
      {/* <div>
        <div className='mb-[10px]'>
          <input type="text" placeholder='Bạn muốn tìm nội dung gì?' className='w-full px-[50px] py-[20px] bg-primary-bg border-[5px] border-[rgba(255,255,255,0.8)] rounded-[500px]' />
        </div>
        <div className='flex gap-[17px] items-center mb-[21px]'>
          <div className='w-[80px] h-[80px] text-center rounded-[10px] bg-primary-bg text-black text-[50px]'>
            <i class="fa-solid fa-heart"></i>
          </div>
          <div>
            <p className='font-bold text-[20px]'>Các bài hát đã thích</p>
            <p className='font-thin'>2 bài hát</p>
          </div>
        </div>
        <div className=''>
          <div className='mb-[21px]'>
            <p className='inline-block py-[9px] px-[48px] bg-primary-bg rounded-[500px]'>Nghệ sĩ</p>
          </div>
          <div className=''>
            <LibraryItem />
            <LibraryItem />
            <LibraryItem />
          </div>
        </div>
      </div> */}
      
    </div>
  )
}

export default Library