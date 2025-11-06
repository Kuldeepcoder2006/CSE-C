import { Routes, Route, Link } from 'react-router-dom'
import Login from './Components/Login/Login.jsx'
import Register from './components/Login/Register.jsx'

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/login" style={{ margin: '0 15px' }}>Login</Link>
        <Link to="/register" style={{ margin: '0 15px' }}>Register</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App

