import React from 'react'
import { Link } from 'react-router-dom'

const RecommendText = ({ content, routeToText, routeTo }) => {
  return (
    <div>
      <p className='text-[30px] font-thin'>{content} <Link to={routeTo}>{routeToText}</Link></p>
    </div>
  )
}

export default RecommendText