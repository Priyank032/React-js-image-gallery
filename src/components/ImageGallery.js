import WSPGallery from './WSPGallery';
import React,{useEffect,useState} from 'react';
import axios from "axios";

const ImageGallery = () => {
    const[galleryImages,setGalleryImages] = useState([]);
  const galleryImages2 = [];

  const ImagesApi = async () => {
    try {
      const data = await axios.get(
        `https://pixabay.com/api/?key=28723975-ee704535ca2a03a32906b925f&q=yellow+flowers&image_type=photo`
      );

      // console.log("lp")
      setGalleryImages(data.data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ImagesApi();
  },[]);

  galleryImages.map((img) => {
    console.log(img.webformatURL)
    galleryImages2.push({img:img.webformatURL})
  })

  return (
    <div><WSPGallery
    galleryImages={galleryImages2}
  /></div>
  )
}

export default ImageGallery