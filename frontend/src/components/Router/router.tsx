import React from "react";
import { Layout } from "..";
import { PrivateRoute } from "./privateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserSignUp, UserLogin, UserPage, AdminSignUp, AdminLogin, AdminPage } from "../../pages/";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
        <Route path="admin" element={<Layout />}>
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
