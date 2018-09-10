import React from 'react';
import { Link } from 'react-router-dom';
import { pullRight, h1 } from './Layout.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Link to="/">
                <h1 className={h1}>
                    React Boilerplate with webpack
        </h1>
            </Link>
            {children}
            <hr />
            <p className={pullRight}>
                Made by Mohak Pingle
      </p>
        </div>
    );
};

export default Layout;