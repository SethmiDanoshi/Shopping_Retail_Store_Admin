import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { AdminDashboard } from './components/AdminDashboard';
import Sidebar, { SidebarItem } from './components/Sidebar';
import { BarChart, Boxes, LayoutDashboard, LifeBuoy, Package, Settings, UserCircle } from 'lucide-react';
import Profile from './components/Profile';
import ProductList from './components/ProductList';
import ViewOrders from './components/ViewOrders';
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <div className="App h-screen flex">
        {/* Sidebar Component */}
        <Sidebar>
          <Link to="/" className="sidebar-link">
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
            />
          </Link>
          <Link to="/profile" className="sidebar-link">
            <SidebarItem
              icon={<UserCircle size={20} />}
              text="Profile"
            />
          </Link>
          <Link to="/products" className="sidebar-link">
            <SidebarItem
              icon={<Boxes size={20} />}
              text="Products"
            />
          </Link>
          <Link to="/orders" className="sidebar-link">
            <SidebarItem
              icon={<Package size={20} />}
              text="Orders"
            />
          </Link>
          <Link to="/analytics" className="sidebar-link">
            <SidebarItem
              icon={<BarChart size={20} />}
              text="Analytics"
            />
          </Link>
          <hr className="my-3" />
          <Link to="/settings" className="sidebar-link">
            <SidebarItem
              icon={<Settings size={20} />}
              text="Settings"
            />
          </Link>
          <Link to="/help" className="sidebar-link">
            <SidebarItem
              icon={<LifeBuoy size={20} />}
              text="Help"
            />
          </Link>
        </Sidebar>

        {/* Main Content Area */}
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/orders" element={<ViewOrders />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<div>Settings Component</div>} />
            <Route path="/help" element={<div>Help Component</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
