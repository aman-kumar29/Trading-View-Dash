import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/Login/LoginPage.js'
import RegisterPage from './pages/Register/RegisterPage.js'
import AuthRoute from './components/AuthRoute/AuthRoute.js'
import ProfilePage from './pages/Profile/ProfilePage.js'
import EditProfilePage from './pages/Profile/EditProfilePage.js'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/tag/:tag" element={<HomePage />} />
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
