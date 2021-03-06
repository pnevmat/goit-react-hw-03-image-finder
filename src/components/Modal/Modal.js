import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

const Modal = (props) => {
    return (
        <div className={styles.Overlay} onClick={e => {props.onClick(e)}}>
            <div className={styles.Modal}>
                {props.children}
            </div>
        </div>
    );
};

Modal.propTypes ={
    children: PropTypes.object.isRequired
};

export default Modal;