import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <form style={{ display: 'flex', flexDirection: 'column', width: '250px', margin: 'auto' }}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default Register
