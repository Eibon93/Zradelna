import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, BrowserRouter, Route,  } from 'react-router-dom'
import AdminPage from './pages/AdminPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import UserPage from './pages/UserPage.tsx'
import OrdersPage from './pages/OrdersPage.tsx'
import MainPage from './pages/MainPage.tsx'

// POKUD JSI SE SEM DOSTAL, TAK TADY NIC NEMEN!!!!!! (PRO VSECHNY)  
// ne fakt vazne, nemen nic


createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<MainPage/>} />
    <Route path="/admin" element={<AdminPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/user" element={<UserPage/>} />
    <Route path="/orders" element={<OrdersPage/>} />
    <Route path="*" element={<><h1>ERROR 404</h1></>} />

  </Routes>
 </BrowserRouter>
)
