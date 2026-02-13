import React from 'react';
import { FaBars, FaSearch, FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 30px',
            backgroundColor: '#fff',
            borderBottom: '1px solid #e5e7eb',
            height: '70px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <FaBars
                    className="mobile-toggle"
                    onClick={toggleSidebar}
                    style={{ cursor: 'pointer', fontSize: '20px', display: 'none' }} // Hidden on large screens, shown via CSS media query
                />
                <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: '#f3f4f6', padding: '8px 15px', borderRadius: '20px' }}>
                    <FaSearch style={{ color: '#9ca3af', marginRight: '10px' }} />
                    <input
                        type="text"
                        placeholder="Search here..."
                        style={{ border: 'none', background: 'transparent', outline: 'none', color: '#374151' }}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ position: 'relative', cursor: 'pointer' }}>
                    <FaEnvelope style={{ color: '#6b7280', fontSize: '20px' }} />
                    <span style={{
                        position: 'absolute', top: '-5px', right: '-5px',
                        background: 'purple', color: '#fff', fontSize: '10px',
                        borderRadius: '50%', padding: '2px 5px'
                    }}>5+</span>
                </div>
                <div style={{ position: 'relative', cursor: 'pointer' }}>
                    <FaBell style={{ color: '#6b7280', fontSize: '20px' }} />
                    <span style={{
                        position: 'absolute', top: '-5px', right: '-5px',
                        background: 'purple', color: '#fff', fontSize: '10px',
                        borderRadius: '50%', padding: '2px 5px'
                    }}>8+</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <div style={{ textAlign: 'right' }}>
                        <h4 style={{ fontSize: '14px', margin: 0, color: '#1f2937' }}>Nabila A.</h4>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>Admin</span>
                    </div>
                    <FaUserCircle style={{ fontSize: '30px', color: '#d1d5db' }} />
                </div>
            </div>

            {/* Mobile Toggle CSS Logic Injection (Inline for simplicity or moved to CSS) */}
            <style>{`
        @media (max-width: 768px) {
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
