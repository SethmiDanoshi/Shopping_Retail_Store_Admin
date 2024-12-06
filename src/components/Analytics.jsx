import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  // Bar chart data
  const salesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [20000, 30000, 25000, 27000, 60000, 38000, 29000],
        backgroundColor: "#2da3fc",
        borderRadius: 5, // Rounded bar corners
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Weekly Sales",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value.toLocaleString()}`,
        },
      },
    },
  };

  return (
    
    <div className="p-6 bg-gray-100 min-h-screen">
        <div className="bg-black text-white pl-10 py-4">
  <h1 className="text-lg font-bold">Analytics </h1>
</div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Total Sales</h2>
        <div className="h-64">
          <Bar data={salesData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
