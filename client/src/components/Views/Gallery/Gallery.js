import { IMAGES_URL } from '../../../config';
import styles from '../Gallery/Gallery.module.scss';

const Gallery = ({ galleryImages }) => {

    const images = galleryImages;
    console.log(images)
    
    return (
    <div className={`row ${styles.slider}`}>
      {images.map((image, i) => (
        <div key={i} className={`${styles.item}`}>
          <img
            src={`${IMAGES_URL}/${image}`}
          />
        </div>
      ))}
    </div>
    )
};

export default Gallery;