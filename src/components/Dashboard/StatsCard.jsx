import React from 'react';

const StatsCard = ({ title, value, icon, color, bg }) => {
    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: '#6b7280', fontSize: '14px', fontWeight: '500' }}>{title}</span>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginTop: '5px' }}>{value}</h3>
            </div>
            <div style={{
                width: '50px', height: '50px', borderRadius: '50%',
                background: bg || `${color}20`, // Light background of the color
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: color, fontSize: '24px'
            }}>
                {icon}
            </div>
        </div>
    );
};

export default StatsCard;
