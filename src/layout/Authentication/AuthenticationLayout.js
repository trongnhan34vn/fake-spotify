import React from 'react'

const AuthenticationLayout = ({children, title}) => {
  return (
    <div>
      <div className='bg-primary-bg h-max-full pt-[137px]'>
        <div className='bg-white border-[1px] w-[550px] h-[773px] mx-auto rounded-[30px] p-[45px] border-black drop-shadow-md'>
          <div className='mb-[31px]'>
            <h2 className='mx-auto text-center text-[55px] mb-[11px]'>{title}</h2>
            <img className='w-[308px] mx-auto' src={require("../../assets/logo 2.png")} alt="" />
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthenticationLayout