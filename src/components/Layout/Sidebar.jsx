import React from 'react';
import {
    FaHome, FaUserGraduate, FaChalkboardTeacher, FaUserFriends,
    FaMoneyBillWave, FaCalendarAlt, FaClipboardList, FaCommentDots
} from 'react-icons/fa';

import logo from '../../assets/logo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const menuItems = [
        { name: 'Dashboard', icon: <FaHome />, path: '#' },
        { name: 'Students', icon: <FaUserGraduate />, path: '#' },
        { name: 'Teachers', icon: <FaChalkboardTeacher />, path: '#' },
        { name: 'Parents', icon: <FaUserFriends />, path: '#' },
        { name: 'Entitle', icon: <FaMoneyBillWave />, path: '#' }, // Assuming 'Entitle' or similar from image, maybe 'Earnings'
        { name: 'Finance', icon: <FaMoneyBillWave />, path: '#' },
        { name: 'Event', icon: <FaCalendarAlt />, path: '#' },
        { name: 'Notice Board', icon: <FaClipboardList />, path: '#' },
        { name: 'Message', icon: <FaCommentDots />, path: '#' },
    ];

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header" style={{ justifyContent: 'center', padding: '20px 10px' }}>
                <img src={logo} alt="Kognix Logo" style={{ maxWidth: '100%', height: 'auto', maxHeight: '120px' }} />
            </div>
            <div className="sidebar-menu">
                {menuItems.map((item, index) => (
                    <a key={index} href={item.path} className={`menu-item ${index === 0 ? 'active' : ''}`}>
                        <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                        <span>{item.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
