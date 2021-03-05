import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = ({images, onToggleModal}) => {
    return (
        <ul className={styles.ImageGallery}>
            <ImageGalleryItem 
                images={images}
                onToggleModal={onToggleModal}
            />
        </ul>
    );
};

export default ImageGallery;