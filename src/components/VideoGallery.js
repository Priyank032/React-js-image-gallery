import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

import './video.css'

const VideoGallery = ({galleryVideo}) => {
    console.log(galleryVideo);

    const [current, setCurrent] = useState(0)
    const length = galleryVideo.length
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setCurrent(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  />
          <div className='fullScreenImage'>
          <video loop autoPlay src={galleryVideo[current].video}  controls>
     </video>
            {/* <video controls >
            <source src={galleryVideo[current].video} type="video/mp4" alt='' /> 
            </video> */}
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {
          galleryVideo && galleryVideo.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default VideoGallery