// app/(dashboard)/layout.tsx
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Admin Dashboard</h1>
        {/* You can add a sidebar or navbar here */}
      </header>

      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
