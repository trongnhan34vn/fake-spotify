import React from 'react'
import LoadingOverlay from 'react-loading-overlay';

const LoadingOverlayComp = ({ isActive, message }) => {
  return (
    <div className='fixed top-0 z-20 bottom-0 right-0 left-0 h-screen'>
      <LoadingOverlay
        active={isActive}
        spinner={true}
        text='Loading your content...'
      >
        <p>Some content or children or something.</p>
      </LoadingOverlay>
    </div>

  )
}
LoadingOverlay.propTypes = undefined

export default LoadingOverlayComp