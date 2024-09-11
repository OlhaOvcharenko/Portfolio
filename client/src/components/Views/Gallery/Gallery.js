import React from 'react';
import { useState } from 'react';
import { IMAGES_URL } from '../../../config';

import styles from '../Gallery/Gallery.module.scss';


const Gallery = ({ galleryImages }) => {
  const [selectedImage, setSelectedImage] = useState(`${IMAGES_URL}/${galleryImages[0]}`);

  const handleClickImage = (image) => {
    setSelectedImage(`${IMAGES_URL}/${image}`);
  };

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.selectedImageContainer}>
        <img
          src={selectedImage}
          alt="Selected"
          className={styles.selectedImage}
        />
      </div>

      <div className={styles.slider}>
        {galleryImages.map((image, i) => (
          <div key={i} className={styles.item}>
            <img
              src={`${IMAGES_URL}/${image}`}
              alt={`galleryImg ${i}`}
              className={styles.galleryImage}
              onClick={() => handleClickImage(image)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;