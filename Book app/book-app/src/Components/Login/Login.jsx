import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form style={{ display: 'flex', flexDirection: 'column', width: '250px', margin: 'auto' }}>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  )
}

export default Login
