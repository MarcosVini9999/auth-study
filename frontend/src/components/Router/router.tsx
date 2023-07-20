import { UserSignUp, UserLogin, UserPage, AdminSignUp, AdminLogin, AdminPage } from "../../pages/";
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Outlet />
            </main>
          }
        >
          <Route path="" element={<UserLogin />} />
          <Route path="signup" element={<UserSignUp />} />
          <Route
            path="home"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="admin"
          element={
            <main>
              <Outlet />
            </main>
          }
        >
          <Route path="" element={<AdminLogin />} />
          <Route path="signup" element={<AdminSignUp />} />
          <Route
            path="home"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
