import React from 'react';
import './css/galsan.css';

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)

const Header = () => {
    return (
        <div>
            <div className="logo">
                GalSan
            </div>
            <div className="menu">
                <MenuItem>홈</MenuItem>
                <MenuItem>소개</MenuItem>
                <MenuItem>계</MenuItem>
            </div>
        </div>
    );
};

export default Header;