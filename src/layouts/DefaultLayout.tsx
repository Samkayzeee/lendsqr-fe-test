import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import "./DefaultLayout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="layout">
      <Navbar onMenuToggle={handleMenuToggle} />

      <div className="main">
        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        <main className="layout-main">{children}</main>
      </div>

      
    </div>
  );
};

export default DefaultLayout;
