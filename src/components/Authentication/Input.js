import React from 'react'
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../constant/validatePattern'

const Input = ({ register, field, placeholder, type, fieldName, errors }) => {
  const generateRegex = () => {
    switch (field) {
      case 'email':
        return REGEX_EMAIL;
      case 'password':
        return REGEX_PASSWORD;
      default:
        return null;
    }
  }

  const generateErrors = () => {
    switch (field) {
      case 'email':
        return errors.email;
      case 'password':
        return errors.password;
      default:
        return null;
    }
  }
  return (
    <div className='mb-[20px]'>
      <input {...register(
        field,
        {
          required: fieldName + ' is required!',
          pattern: {
            value: generateRegex(),
            message: fieldName + " is invalid! Please try another!"
          }
        }
      )}
        type={type}
        className='border-[1px] py-[22px] leading-5 border-[rgba(0,0,0,0.2)] px-[39px] text-[25px] rounded-[10px] w-full'
        placeholder={placeholder}
      />
      {generateErrors() && <span className='text-[12px] text-red-500'>{generateErrors().message}</span>}
    </div>


  )
}

export default Input