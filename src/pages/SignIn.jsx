import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../signin-style.css'

function validate(fields) {
  const errors = {}
  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!fields.password) {
    errors.password = 'Password is required.'
  } else if (fields.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.'
  }
  return errors
}

export default function SignIn() {
  const [fields, setFields] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  function handleChange(e) {
    const updated = { ...fields, [e.target.name]: e.target.value }
    setFields(updated)
    if (touched[e.target.name]) {
      setErrors(validate(updated))
    }
  }

  function handleBlur(e) {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
    setErrors(validate(fields))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTouched({ email: true, password: true })
    const validationErrors = validate(fields)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      console.log('Sign in submitted:', fields)
    }
  }

  return (
    <div className="container">
      <div className="left">
        <img src="/assets/coding.png" alt="" />
      </div>
      <div className="right">
        <div className="right-container">
          <p id="joincoders">Join Coders Now!</p>
          <form onSubmit={handleSubmit} noValidate className="signup-form">
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={fields.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={fields.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && <span className="field-error">{errors.password}</span>}
            <button type="submit">Login</button>
          </form>
          <div className="login">
            <p>New to CodeCLA.</p>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
