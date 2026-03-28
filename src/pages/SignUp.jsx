import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import '../../signup-style.css'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().min(1, 'Email is required.').email('Enter a valid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
})

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  function onSubmit(data) {
    console.log('Sign up submitted:', data)
  }

  return (
    <div className="container">
      <div className="left">
        <img src="/assets/coding.png" alt="" />
      </div>
      <div className="right">
        <div className="right-container">
          <p id="joincoders">Join Coders Now!</p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="signup-form">
            <label htmlFor="firstName"></label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              {...register('firstName')}
            />
            {errors.firstName && <span className="field-error">{errors.firstName.message}</span>}
            <label htmlFor="lastName"></label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              {...register('lastName')}
            />
            {errors.lastName && <span className="field-error">{errors.lastName.message}</span>}
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email && <span className="field-error">{errors.email.message}</span>}
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && <span className="field-error">{errors.password.message}</span>}
            <button type="submit">Sign Up</button>
          </form>
          <div className="login">
            <p>Already have an account?.</p>
            <Link to="/signin">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
