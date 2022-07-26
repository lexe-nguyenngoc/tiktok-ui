import React, { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import noImage from '~/assets/images/no-image.png';

import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallback: customFallback, ...rest }, ref) => {
    const [fallback, setFallback] = useState();

    const handleError = () => {
        setFallback(customFallback || noImage);
    };

    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...rest}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    fallback: PropTypes.string,
};

Image.defaultProps = {
    src: noImage,
};

export default Image;
