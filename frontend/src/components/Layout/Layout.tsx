import React from "react";
import { Outlet } from "react-router-dom";
import "./LayoutStyles.css";

export const Layout: React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
