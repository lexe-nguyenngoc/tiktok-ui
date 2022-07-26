import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ReactComponent as Back } from '~/assets/svg/arrow-left.svg';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <Back />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func,
};

Header.defaultProps = {
    onBack: () => {},
};

export default Header;
