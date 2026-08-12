import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ExternalHackathon from './pages/ExternalHackathon'
import Departments from './pages/Departments'
import DepartmentDetail from './pages/DepartmentDetail'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/hackathon" element={<ExternalHackathon />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:slug" element={<DepartmentDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}