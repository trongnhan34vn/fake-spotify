import React from 'react'
import AppLayout from '../layout/apps/AppLayout'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'

const Playlist = () => {
  return (
    <AppLayout>
      <div className='bg-[#8F9BAD] p-[14px]'>
        <div className='flex gap-[22px] items-end'>
          <img className='w-[262px] h-[262px]' src={require("../assets/image 2.png")} alt="" />
          <div>
            <p className='text-[25px]'>Playlist</p>
            <p className='text-[45px] font-bold'>Jung Kook ON!</p>
            <p className='text-[14px]'>SEVEN Clean and Explicit Original • Weekday • Weekend • Alesso Remix Versions</p>
            <p className='text-[14px]'>100 lượt thích - 3 bài hát</p>
          </div>
        </div>
      </div>
      <div className='h-full bg-primary-bg p-[36px]'>
        <div className='flex items-center gap-[25px] mb-[40px]'>
          <button className='w-[50px] h-[50px] text-white text-[20px] bg-black flex items-center justify-center rounded-[50%]'>
            <i class="fa-solid fa-play"></i>
          </button>
          <button className='text-[50px]'>
            <i class="fa-regular fa-heart"></i>
          </button>
          <Menu>
            <MenuButton className={"text-[50px]"}>
              <i class="fa-solid fa-list"></i>
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="bottom start"
                className="p-1 -left-full absolute text-black border-[1px] border-black w-52 rounded-xl bg-primary-bg text-sm/6"
              >
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    Thêm vào thư viện
                    <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">⌘E</kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    Báo cáo
                    <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">⌘D</kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    Chia sẻ
                    <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">⌘A</kbd>
                  </button>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
        <table className='table w-full'>
          <thead>
            <tr key="">
              <th className='py-2'>#</th>
              <th>Tiêu đề</th>
              <th>Album</th>
              <th>Ngày thêm</th>
              <th>Thời lượng</th>
            </tr>
          </thead>
          <tbody>
            <tr key="">
              <td className='py-4 text-center'>1</td>
              <td width={"40%"} className='py-2 text-center'>Seven (Original)</td>
              <td className='py-4 text-center'>Seven</td>
              <td className='py-4 text-center'>23-08-2023</td>
              <td className='py-4 text-center'>3:04</td>
            </tr>
            <tr key="">
              <td className='py-4 text-center'>1</td>
              <td width={"40%"} className='py-2 text-center'>Seven (Original)</td>
              <td className='py-4 text-center'>Seven</td>
              <td className='py-4 text-center'>23-08-2023</td>
              <td className='py-4 text-center'>3:04</td>
            </tr>
            <tr key="">
              <td className='py-4 text-center'>1</td>
              <td width={"40%"} className='py-2 text-center'>Seven (Original)</td>
              <td className='py-4 text-center'>Seven</td>
              <td className='py-4 text-center'>23-08-2023</td>
              <td className='py-4 text-center'>3:04</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AppLayout>
  )
}

export default Playlist