import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '~/layouts/components/Header';

function HeaderOnly() {
    return (
        <div>
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default HeaderOnly;
