import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, hideOnClick, items, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const handleBack = () => setHistory((prevState) => prevState.slice(0, prevState.length - 1));
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            return setHistory((prevState) => [...prevState, item.children]);
                        }

                        onChange(item);
                    }}
                />
            );
        });
    };

    // Reset to first items
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            placement="bottom-end"
            delay={[0, 700]}
            offset={[12, 8]}
            onHide={handleResetMenu}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

Menu.defaultProps = {
    hideOnClick: false,
    items: [],
    onChange: () => {},
};

export default Menu;
