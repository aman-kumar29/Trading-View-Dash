import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/Login/LoginPage.js'
import RegisterPage from './pages/Register/RegisterPage.js'
import AuthRoute from './components/AuthRoute/AuthRoute.js'
import ProfilePage from './pages/Profile/ProfilePage.js'
import EditProfilePage from './pages/Profile/EditProfilePage.js'
import Dashboard from './pages/Dashboard/Dashboard.js'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path="/search/:searchTerm" element={<Dashboard />} />
      <Route path="/tag/:tag" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/profile' element={
        <AuthRoute>
          <ProfilePage />
        </AuthRoute>} />
      <Route path='/editprofile' element={
        <AuthRoute>
          <EditProfilePage />
        </AuthRoute>} />
    </Routes>
  )
}
