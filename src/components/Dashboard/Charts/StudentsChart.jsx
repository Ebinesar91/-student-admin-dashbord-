import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: 'Female Students', value: 45000, color: '#f59e0b' }, // Orange
    { name: 'Male Students', value: 55000, color: '#3b82f6' },   // Blue
];

const StudentsChart = () => {
    return (
        <div className="card" style={{ height: '350px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Students</h3>
                <div>...</div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="circle"
                    />
                </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                {data.map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.value.toLocaleString()}</h4>
                        <p style={{ fontSize: '12px', color: '#6b7280' }}>{item.name}</p>
                    </div>
                ))}
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', pointerEvents: 'none' }}>
                {/* Center label could go here if needed */}
            </div>
        </div>
    );
};

export default StudentsChart;
