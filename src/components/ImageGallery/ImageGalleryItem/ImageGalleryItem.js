import React from 'react';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({images, onToggleModal}) => {
    return (
        <>
            {images.map(image => {
                return (
                    <li className={styles.ImageGalleryItem} key={image.id}>
                        <img 
                            src={image.webformatURL} 
                            alt="" 
                            className={styles.ImageGalleryItem_image}
                            id={image.id}
                            onClick={e => {
                                e.preventDefault();
                                onToggleModal(e);
                            }}
                        />
                    </li>
                );
            })}
        </>
    );
};

export default ImageGalleryItem;