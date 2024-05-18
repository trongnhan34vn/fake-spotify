import React, { memo, useContext } from 'react'
import AppLayout from '../layout/apps/AppLayout'
import { MyContext } from '../context/AppContext';
import ArtistItem from '../components/Apps/ArtistItem';
import OnSearch from '../components/Apps/Search/OnSearch';

const tailwindColors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-indigo-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-teal-500',
  'bg-gray-500'
];

const categorySearch = [
  "Podcasts", "Dành cho bạn", "Mới phát hành", "Nhạc Việt", "K-POP", "Jazz", "Rock", "Pop Ballad",
  "Podcasts", "Dành cho bạn", "Mới phát hành", "Nhạc Việt", "K-POP", "Jazz", "Rock"
]

const Search = () => {
  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * tailwindColors.length);

    // Get the random Tailwind color class
    const randomColorClass = tailwindColors[randomIndex];

    return randomColorClass;
  }

  const { isSearching } = useContext(MyContext);

  const render = () => {
    if (isSearching) {
      return (
        <OnSearch />
      )
    }
    return (
      <div className='bg-[rgba(217,217,217,0.7)] px-[40px] py-[20px] h-full'>
        <h3 className='text-[40px] font-bold mb-[40px]'>Duyệt tìm tất cả</h3>
        <div className='grid grid-cols-5 gap-[26px]'>
          {categorySearch.map(cat => {
            return <div className={`w-[236px] h-[236px] p-[20px] cursor-pointer ${generateRandomColor()}`}>
              <p className='text-[30px]'>{cat}</p>
            </div>
          })}
        </div>
      </div>
    )
  }

  return (
    <AppLayout>
      {render()}
    </AppLayout>
  )
}

export default memo(Search) 