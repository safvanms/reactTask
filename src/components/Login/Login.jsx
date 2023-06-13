import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const initialData = {
  cc: '',
  phone: '',
}

export default function Login() {
  const [loginData, setLoginData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post(
        'http://ecommerce.toou.in:4011/customer/phonelogin',
        {
          country_code: loginData.cc,
          phone_number: loginData.phone,
        },
      )
      const details = response.data.data

      if (details && details.id) {
        navigate(`/home/${details.id}`)
      } else {
        setError('An error occurred during login')
      }
      setLoginData(initialData)

      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData({
      ...loginData,
      [name]: value,
    })
  }


  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="countryCode">Country Code:</label>
        <input
          type="text"
          name="cc"
          id="countryCode"
          value={loginData.cc}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          name="phone"
          id="phoneNumber"
          pattern="[0-9]{10}"
          value={loginData.phone}
          onChange={handleChange}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleLogin}>{loading ? 'wait...' : 'Login'}</button>
    </div>
  )
}
