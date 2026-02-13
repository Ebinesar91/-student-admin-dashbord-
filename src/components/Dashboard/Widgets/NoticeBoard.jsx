import React from 'react';

const notices = [
    { p: 'Great School manag mene esom text of the printing.', date: '16 June, 2019', color: '#10b981' },
    { p: 'Great School manag printing.', date: '16 June, 2019', color: '#f59e0b' },
    { p: 'Great School manag mene esom text of the printing.', date: '16 June, 2019', color: '#3b82f6' },
    { p: 'Great School manag printing.', date: '16 June, 2019', color: '#ef4444' },
];

const NoticeBoard = () => {
    return (
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Notice Board</h3>
                <div>...</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {notices.map((notice, index) => (
                    <div key={index}>
                        <p style={{ fontSize: '14px', fontWeight: '500', color: '#1f2937', marginBottom: '5px' }}>{notice.date}</p>
                        <p style={{ fontSize: '13px', color: '#6b7280' }}>
                            <span style={{
                                display: 'inline-block', width: '10px', height: '10px',
                                borderRadius: '50%', backgroundColor: notice.color, marginRight: '8px'
                            }}></span>
                            {notice.p}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoticeBoard;
