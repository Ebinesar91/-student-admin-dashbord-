import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', earnings: 4000, expenses: 2400 },
    { name: 'Feb', earnings: 3000, expenses: 1398 },
    { name: 'Mar', earnings: 2000, expenses: 9800 },
    { name: 'Apr', earnings: 2780, expenses: 3908 },
    { name: 'May', earnings: 1890, expenses: 4800 },
    { name: 'Jun', earnings: 2390, expenses: 3800 },
    { name: 'Jul', earnings: 3490, expenses: 4300 },
];

const EarningsChart = () => {
    return (
        <div className="card" style={{ height: '350px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Earnings</h3>
                <div>...</div>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3b82f6' }}></div>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>Total Collections</span>
                    <span style={{ fontWeight: 'bold' }}>$75,500</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>Fees Collection</span>
                        <span style={{ fontWeight: 'bold' }}>$35,500</span>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="earnings" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.8} />
                    <Area type="monotone" dataKey="expenses" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.8} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EarningsChart;
