import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import defaultImage from './no-poster.png';

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

ImageGallery.defaultProps = {
    avatar: defaultImage
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string
        })
    ),
    onToggleModal: PropTypes.func.isRequired
};

export default ImageGallery;