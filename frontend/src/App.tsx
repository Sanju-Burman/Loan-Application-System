import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Shared/layout'
import ApplyLoanPage from './pages/applyLoanPage'
import CalendarPage from './pages/calendarPage'
import CompareLoansPage from './pages/CompareLoansPage'
import DashboardPage from './pages/dashboardPage'
import HomePage from './pages/homePage'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyLoanPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/compare" element={<CompareLoansPage />} />
      </Routes>
    </Layout>
  )
}

export default App
