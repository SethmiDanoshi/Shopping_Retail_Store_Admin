import React, { useState } from 'react';
import './App.css';

import { AdminDashboard } from './components/AdminDashboard';
import Sidebar, { SidebarItem } from './components/Sidebar';
import { BarChart, Boxes, LayoutDashboard, LifeBuoy, Package, Settings, UserCircle } from 'lucide-react';
import Profile from './components/Profile';
import ProductList from './components/ProductList';
import ViewOrders from './components/ViewOrders';
import Analytics from './components/Analytics';



function App() {
  // State to track the selected component
  const [activeComponent, setActiveComponent] = useState("dashboard");

  return (
    <div className="App h-screen flex">
      {/* Sidebar Component */}
      <Sidebar>
        <SidebarItem 
          icon={<LayoutDashboard size={20} />} 
          text="Dashboard" 
          active={activeComponent === "dashboard"} 
          onClick={() => setActiveComponent("dashboard")} 
        />
        <SidebarItem 
          icon={<UserCircle size={20} />} 
          text="Profile" 
          active={activeComponent === "profile"} 
          onClick={() => setActiveComponent("profile")} 
        />
        <SidebarItem 
          icon={<Boxes size={20} />} 
          text="Products" 
          active={activeComponent === "products"} 
          onClick={() => setActiveComponent("products")} 
        />
        <SidebarItem 
          icon={<Package size={20} />} 
          text="Orders" 
          active={activeComponent === "orders"} 
          onClick={() => setActiveComponent("orders")} 
        />
        <SidebarItem 
          icon={<BarChart size={20} />} 
          text="Analytics" 
          active={activeComponent === "analytics"} 
          onClick={() => setActiveComponent("analytics")} 
        />
        <hr className="my-3" />
        <SidebarItem 
          icon={<Settings size={20} />} 
          text="Settings" 
          active={activeComponent === "settings"} 
          onClick={() => setActiveComponent("settings")} 
        />
        <SidebarItem 
          icon={<LifeBuoy size={20} />} 
          text="Help" 
          active={activeComponent === "help"} 
          onClick={() => setActiveComponent("help")} 
        />
      </Sidebar>

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        {activeComponent === "dashboard" && <AdminDashboard />}
        {activeComponent === "profile" && <Profile />}
        {activeComponent === "products" && (
        <>
        
          <ProductList />
          
      </>
)}

        {activeComponent === "orders" && <ViewOrders/>}
        {activeComponent === "analytics" && <Analytics/>}
        {activeComponent === "settings" && <div>Settings Component</div>}
        {activeComponent === "help" && <div>Help Component</div>}
      </div>
    </div>
  );
}

export default App;
