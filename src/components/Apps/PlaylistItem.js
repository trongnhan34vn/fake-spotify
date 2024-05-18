import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlaylistItem = ({ title, artist, imageUrl }) => {
  const navigate = useNavigate();
  const routeToPlaylist = () => {
    navigate('/playlist')
  }
  return (
    <div onClick={routeToPlaylist} className='cursor-pointer'>
      <img className='w-[260px] mb-[16px]' src={require("../../assets/image 2.png")} alt="" />
      <div>
        <p className='text-[20px] leading-5 mb-1'>{title}</p>
        <p className='font-thin'>{artist}</p>
      </div>
    </div>
  )
}

export default PlaylistItem;