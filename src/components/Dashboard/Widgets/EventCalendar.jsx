import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const EventCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const renderCalendarDays = () => {
        const totalDays = daysInMonth(currentDate);
        const startDay = firstDayOfMonth(currentDate);
        const daysArray = [];

        for (let i = 0; i < startDay; i++) {
            daysArray.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        for (let i = 1; i <= totalDays; i++) {
            const isToday = i === new Date().getDate() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear();
            daysArray.push(
                <div key={i} className={`calendar-day ${isToday ? 'today' : ''}`} style={{
                    width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '50%', cursor: 'pointer', fontSize: '14px',
                    backgroundColor: isToday ? '#ef4444' : 'transparent',
                    color: isToday ? '#fff' : '#374151'
                }}>
                    {i}
                </div>
            );
        }
        return daysArray;
    };

    return (
        <div className="card" style={{ height: 'auto', paddingBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Event Calendar</h3>
                <div>...</div>
            </div>

            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold' }}>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <FaChevronLeft style={{ cursor: 'pointer', color: '#6b7280' }} />
                    <FaChevronRight style={{ cursor: 'pointer', color: '#6b7280' }} />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', textAlign: 'center', marginBottom: '10px' }}>
                {days.map(day => <div key={day} style={{ fontSize: '12px', color: '#9ca3af' }}>{day}</div>)}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', justifyContent: 'items-center' }}>
                {renderCalendarDays()}
            </div>
        </div>
    );
};

export default EventCalendar;
