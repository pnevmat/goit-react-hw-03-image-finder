import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({onLoadMore}) => {
    return (
        <div className={styles.Button_container}>
            <button 
                className={styles.Button}
                type="button" 
                onClick={(e) => {
                    e.preventDefault();
                    onLoadMore();
                }}
            >
                Load more
            </button>
        </div>
    );
};

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired
};

export default Button;