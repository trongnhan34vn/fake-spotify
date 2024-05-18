import React from 'react'

const Category = ({ title, children }) => {
  const generateChild = () => {
    let render = []
    for (let i = 0; i < children.length; i++) {
      if (i < 4) {
        render.push(children[i]);
      }
    }
    return render;
  }
  return (
    <div className='mb-[40px]'>
      <h3 className='font-bold text-[40px] mb-[21px]'>{title}</h3>
      <div className='grid grid-cols-4 gap-5'>
        {generateChild()}
      </div>
    </div>
  )
}

export default Category