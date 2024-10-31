import React, { useState } from 'react';
import './stats.css';

const Stats = () => {
  
  const [activeSection, setActiveSection] = useState('overview');

  
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="stats">
      <ul className="stats-nav">
        <li onClick={() => handleSectionChange('overview')}>Overview</li>
        <li onClick={() => handleSectionChange('recentActivity')}>Recent Activity</li>
        <li onClick={() => handleSectionChange('alerts')}>Alerts</li>
      </ul>

    
      {activeSection === 'overview' && (
        <div className="grid-stats overview">
          <div className="grid-box">
            <div className="heading">Total Transaction</div>
            <div className="figure">657</div>
            <div className="timeframe">20% From this month</div>
          </div>

          <div className="grid-box">
            <div className="heading">Active Smart Contracts</div>
            <div className="figure">354</div>
            <div className="timeframe">205 From this month</div>
          </div>

          <div className="grid-box">
            <div className="heading">Total Value Locked</div>
            <div className="figure">0%</div>
            <div className="timeframe">From launched date</div>
          </div>

          <div className="grid-box">
            <div className="heading">Active Users</div>
            <div className="figure">0 users</div>
            <div className="timeframe">From launched date</div>
          </div>
        </div>
      )}

      {activeSection === 'recentActivity' && (
        <div className="grid-stats recent-activity">
            <h1>Recent Transactions</h1>
            <p>Latest transaction on blockchain</p>


            <ul className="transaction-list">


            <li>
                <span className="desc">
                    Transaction ID <br/>
                    <small>Date, Time</small>
                </span>
                <span className="amount">$0.00</span>
                </li>


            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          
         
        </div>
      )}

      {activeSection === 'alerts' && (
        <div className="grid-stats alerts">
          <h2>Alerts</h2>
          <p>This is the alerts section.</p>

         
          
        </div>
      )}
    </div>
  );
};

export default Stats;
