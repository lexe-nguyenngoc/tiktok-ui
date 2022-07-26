import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ primary, outlined, to, href, size, className, children, onClick, ...passProps }) {
    const props = {
        onClick,
        ...passProps,
    };
    const classes = cx('wrapper', { primary, outlined }, size, className);

    let Comp = 'button';

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={cx(classes)} {...props}>
            {children}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outlined: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    size: 'medium',
    className: '',
};

export default Button;
