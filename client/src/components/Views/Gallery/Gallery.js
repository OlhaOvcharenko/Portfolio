import React, { useState } from 'react';
import { IMAGES_URL } from '../../../config';
import styles from '../Gallery/Gallery.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useEffect } from 'react';

const Gallery = ({ galleryImages }) => {
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (galleryImages.length > 0) {
      setSelectedImage(`${IMAGES_URL}/${galleryImages[0]}`);
    }
  }, [galleryImages]);

  const handleClickImage = (image) => {
    setSelectedImage(`${IMAGES_URL}/${image}`);
  };

  return (
    <div className={styles.galleryWrapper}>
      
      <div className={styles.selectedImageContainer}>
        <img src={selectedImage} alt="Selected" className={styles.selectedImage} />
      </div>

      <div className={styles.slider}>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}  className={styles.swiperStyle}>

          {galleryImages.map((image, i) => (
            <SwiperSlide key={i}>
              <div className={styles.item} onClick={() => handleClickImage(image)}>
                <img
                  src={`${IMAGES_URL}/${image}`}
                  alt={`galleryImg ${i}`}
                  className={styles.galleryImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


export default Gallery;