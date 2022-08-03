import VideoGallery from './VideoGallery';
import React,{useEffect,useState} from 'react';
import axios from "axios";

const VideoGalleryCalling = () => {
    const[galleryVideo,setGalleryVideo] = useState([]);
  const galleryVideo2 = [];

  const VideoApi = async () => {
    try {
      const data = await axios.get(
        `https://pixabay.com/api/videos/?key=28723975-ee704535ca2a03a32906b925f&q=yellow+flowers`
      );

    //   console.log(data.data.hits)
      setGalleryVideo(data.data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    VideoApi();
  },[]);

  galleryVideo.map((video) => {
    // console.log(video.videos.small.url)
    galleryVideo2.push({video:video.videos.small.url,img:video.userImageURL})
  })

  return (
    <div><VideoGallery
    galleryVideo={galleryVideo2}
  /></div>
  )
}

export default VideoGalleryCalling