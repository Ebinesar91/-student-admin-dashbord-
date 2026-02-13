import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaUserFriends, FaMoneyBillWave } from 'react-icons/fa';
import StatsCard from './StatsCard';
import EarningsChart from './Charts/EarningsChart';
import ExpensesChart from './Charts/ExpensesChart';
import StudentsChart from './Charts/StudentsChart';
import EventCalendar from './Widgets/EventCalendar';
import NoticeBoard from './Widgets/NoticeBoard';
import FinanceList from './Widgets/FinanceList';
import SocialStats from './Widgets/SocialStats';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2 style={{ marginBottom: '20px', color: '#1f2937' }}>Admin Dashboard</h2>

            {/* Stats Cards Row */}
            <div className="grid-container">
                <StatsCard title="Students" value="150000" icon={<FaUserGraduate />} color="#10b981" bg="#d1fae5" />
                <StatsCard title="Teachers" value="2250" icon={<FaChalkboardTeacher />} color="#3b82f6" bg="#dbeafe" />
                <StatsCard title="Parents" value="5690" icon={<FaUserFriends />} color="#f59e0b" bg="#fef3c7" />
                <StatsCard title="Earnings" value="$193000" icon={<FaMoneyBillWave />} color="#ef4444" bg="#fee2e2" />
            </div>

            {/* Main Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px' }}>

                {/* Left Column (Main Charts) */}
                <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Row 1: Earnings Chart */}
                    <EarningsChart />

                    {/* Row 2: Expenses & Students */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <ExpensesChart />
                        <StudentsChart />
                    </div>

                    {/* Row 3: Event Calendar */}
                    <EventCalendar />
                </div>

                {/* Right Column (Side Widgets) */}
                <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <FinanceList />
                    <NoticeBoard />
                    <SocialStats />
                </div>

            </div>

            {/* Responsive adjustments for simple grid logic (Inline style override for mobile) */}
            <style>{`
        @media (max-width: 1024px) {
           .dashboard > div[style*="grid-template-columns: repeat(12, 1fr)"] {
              grid-template-columns: 1fr !important;
           }
           .dashboard > div > div[style*="gridColumn: span 8"],
           .dashboard > div > div[style*="gridColumn: span 4"] {
              grid-column: span 1 !important;
           }
        }
        @media (max-width: 768px) {
           .dashboard > div > div > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
           }
        }
      `}</style>
        </div>
    );
};

export default Dashboard;
