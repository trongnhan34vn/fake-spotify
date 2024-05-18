import React from 'react'
import AppLayout from '../layout/apps/AppLayout'
import Category from '../components/Apps/Category/Category'
import PlaylistItem from '../components/Apps/PlaylistItem'

const Home = () => {

  return (
    <AppLayout>
      <div className='px-[44px] py-[20px]'>
        <Category title={"Album Hot"}>
          <PlaylistItem artist={"Wren Evans"} title={"LOI CHOI - standard version"} />
          <PlaylistItem artist={"Wren Evans"} title={"LOI CHOI - standard version"} />
          <PlaylistItem artist={"Wren Evans"} title={"LOI CHOI - standard version"} />
          <PlaylistItem artist={"Wren Evans"} title={"LOI CHOI - standard version"} />
          <PlaylistItem artist={"Wren Evans"} title={"LOI CHOI - standard version"} />
          <PlaylistItem artist={"Wren Evans"} title={"LOI CHOI - standard version"} />
          <PlaylistItem artist={"Wren Evans"} title={"LOI CHOI - standard version"} />
          <PlaylistItem artist={"Wren Evans"} title={"LOI CHOI - standard version"} />
        </Category>
        <Category title={"Nghệ sĩ phổ biến"}>
          <PlaylistItem title={"Sơn Tùng MTP"} />
          <PlaylistItem title={"Sơn Tùng MTP"} />
          <PlaylistItem title={"Sơn Tùng MTP"} />
          <PlaylistItem title={"Sơn Tùng MTP"} />
          <PlaylistItem title={"Sơn Tùng MTP"} />
          <PlaylistItem title={"Sơn Tùng MTP"} />
          <PlaylistItem title={"Sơn Tùng MTP"} />
          <PlaylistItem title={"Sơn Tùng MTP"} />
        </Category>
      </div>
    </AppLayout>
  )
}

export default Home