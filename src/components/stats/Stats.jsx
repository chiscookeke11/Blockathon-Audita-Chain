import React, { useState } from "react";
import { FaChartBar, FaBell, FaSearch, FaWallet } from "react-icons/fa";

const Stats = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const TabButton = ({ id, label }) => (
    <button
      className={`px-4 py-2 font-medium rounded-t-lg ${
        activeTab === id
          ? "bg-blue-600 text-white"
          : "bg-slate-700 text-slate-300 hover:bg-slate-600"
      }`}
      onClick={() => setActiveTab(id)}>
      {label}
    </button>
  );

  const Card = ({ title, value, subtitle, icon: Icon }) => (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-slate-200">{title}</h3>
        <Icon className="h-5 w-5 text-blue-400" />
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-slate-400">{subtitle}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="mb-6 flex space-x-2">
        <TabButton id="overview" label="Overview" />
        <TabButton id="recent" label="Recent Activity" />
        <TabButton id="alerts" label="Alerts" />
      </div>

      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="Total Transactions"
            value="657"
            subtitle="20% from this month"
            icon={FaSearch}
          />
          <Card
            title="Active Smart Contracts"
            value="354"
            subtitle="205 from this month"
            icon={FaChartBar}
          />
          <Card
            title="Total Value Locked"
            value="0%"
            subtitle="From launched date"
            icon={FaWallet}
          />
          <Card
            title="Active Users"
            value="0 users"
            subtitle="From launched date"
            icon={FaBell}
          />
        </div>
      )}

      {activeTab === "recent" && (
        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <p className="text-slate-400 mb-4">
            Latest transactions on blockchain
          </p>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center border-b border-slate-700 pb-2">
                <div>
                  <p className="font-medium">Transaction ID</p>
                  <p className="text-sm text-slate-400">Date, Time</p>
                </div>
                <div className="ml-auto font-medium">$0.00</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "alerts" && (
        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Alerts</h2>
          <p className="text-slate-400 mb-4">Recent notifications and alerts</p>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center border-b border-slate-700 pb-2">
                <FaBell className="h-5 w-5 text-blue-400 mr-3" />
                <div>
                  <p className="font-medium">Alert</p>
                  <p className="text-sm text-slate-400">Date, Time</p>
                </div>
                <div className="ml-auto font-medium">$0.00</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
