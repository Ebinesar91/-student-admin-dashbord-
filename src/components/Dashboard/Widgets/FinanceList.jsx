import React from 'react';

const FinanceList = () => {
    // Mock data for finance/history
    const history = [
        { label: 'Total Students', value: '450', percent: '+5%', color: '#10b981' },
        { label: 'Total Teachers', value: '155', percent: '-1%', color: '#ef4444' },
        { label: 'Total Transport', value: '55', percent: '+2%', color: '#f59e0b' },
    ];

    return (
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Finance</h3>
                <div>...</div>
            </div>

            <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>$ 2,590</h2>

            <div style={{ width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px', display: 'flex', marginBottom: '20px', overflow: 'hidden' }}>
                <div style={{ width: '40%', background: '#10b981' }}></div>
                <div style={{ width: '30%', background: '#3b82f6' }}></div>
                <div style={{ width: '20%', background: '#f59e0b' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {history.map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }}></div>
                            <span style={{ fontSize: '14px', color: '#6b7280' }}>{item.label}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ fontWeight: 'bold' }}>{item.value}</span>
                            <span style={{ fontSize: '12px', color: item.percent.includes('+') ? '#10b981' : '#ef4444' }}>{item.percent}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinanceList;
