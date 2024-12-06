
import React, { Component } from "react";
import MetricsCard from "./MetricsCard";
import Banner from "./Banner";


export class AdminDashboard extends Component {
  metrics = [
    { title: "Total Sales", value: "1,234", description: "This month", color: "#3b82f6" },
    { title: "Active Orders", value: "123", description: "Currently in progress", color: "#f59e0b" },
    { title: "Registered Customers", value: "567", description: "Total to date", color: "#10b981" },
    { title: "Total Revenue", value: "$45,678", description: "This month", color: "#ef4444" },
  ];

  render() {
    return (
        <div className="mt-5 p-6 min-h-screen">
           
        {/* Banner Component */}
        <Banner />

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6  min-h-screen h-36">
        {this.metrics.map((metric, index) => (
          <MetricsCard
            key={index}
            title={metric.title}
            value={metric.value}
            description={metric.description}
            color={metric.color}
          />
        ))}
      </div>
      </div>
    );
  }
}

export default AdminDashboard;



