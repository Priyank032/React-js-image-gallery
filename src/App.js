import VideoGalleryCalling from './components/VideoGalleryCalling';
import ImageGallery from './components/ImageGallery';
import './App.css';
import React, { useEffect, useState } from 'react';
import { FaRegImages } from 'react-icons/fa';
import { MdOutlineVideoSettings } from 'react-icons/md';


function App() {


const [show,setShow] = useState(true);
  return (
    <div className="App">
      <br />
      <div>
        <h2>Image and Video Gallery in React JS</h2>
        <br></br>
        <div className='container '>
          <div className='row'>
            <div className='col-6 ' onClick={()=>setShow(true)}>
              {
                show?<h4 style = {{color:"blue"}}>Images</h4> :<h4>Images</h4>
              }
              <FaRegImages />
            </div>
            <div className='col-6 text-center' onClick={()=>setShow(false )}>
            {
                show?<h4 >Videos</h4> :<h4 style = {{color:"blue"}}>Videos</h4>
              }
              <MdOutlineVideoSettings />
            </div>
          </div>
        </div>
      </div>
     <div className='container'>
      {
        show ? <ImageGallery /> : <VideoGalleryCalling />
       
      }
    
     </div>
     
    </div>
  );
}

export default App;
