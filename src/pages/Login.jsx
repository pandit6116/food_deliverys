import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineFastfood } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // Password validation rules
  const hasCapitalLetter = /[A-Z]/.test(password)
  const hasThreeDigits = (password.match(/\d/g) || []).length >= 3
  const hasAtSymbol = /@/.test(password)
  const isPasswordValid = hasCapitalLetter && hasThreeDigits && hasAtSymbol

  const handleLogin = (e) => {
    e.preventDefault()
    
    if (!email) {
      alert('Please enter email')
      return
    }
    
    if (!password) {
      alert('Please enter password')
      return
    }

    if (!isPasswordValid) {
      alert('Password must contain: at least 1 capital letter, 3 digits, and @ symbol')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      // Store authentication in sessionStorage
      sessionStorage.setItem('isAuthenticated', 'true')
      setIsAuthenticated(true)
      
      // Clear history to prevent forward navigation back to protected pages
      window.history.replaceState(null, '', window.location.href)
      
      navigate('/home', { replace: true })
    }, 600)
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-green-400 flex justify-center items-center relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-float1'></div>
      <div className='absolute bottom-20 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float2'></div>
      <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-5 rounded-full animate-float3'></div>

      <div className={`w-[420px] rounded-2xl shadow-2xl flex flex-col justify-center items-center gap-6 px-8 py-12 bg-white backdrop-blur-lg bg-opacity-95 transform transition-all duration-500 ${isLoading ? 'scale-95 opacity-50' : 'scale-100 opacity-100'} animate-slideUp`}>
        
        {/* Logo & Header */}
        <div className='flex flex-col items-center gap-3 animate-fadeIn'>
          <div className='w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-green-400 flex justify-center items-center shadow-lg'>
            <MdOutlineFastfood className='w-8 h-8 text-white'/>
          </div>
          <h1 className='text-3xl font-bold text-gray-800'>FoodHub</h1>
          <p className='text-gray-500 text-sm'>Welcome back to delicious food!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className='w-full flex flex-col gap-4 animate-fadeIn' style={{animationDelay: '0.1s'}}>
          
          {/* Email Input */}
          <div className='relative group'>
            <div className='absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 group-focus-within:scale-110 transition-transform'>
              <MdEmail className='w-5 h-5'/>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full h-12 pl-12 pr-4 border-2 border-gray-200 rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-blue-500 transition-all hover:border-blue-300 focus:shadow-md'
              required
            />
          </div>

          {/* Password Input */}
          <div className='relative group'>
            <div className='absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 group-focus-within:scale-110 transition-transform'>
              <MdLock className='w-5 h-5'/>
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full h-12 pl-12 pr-4 border-2 border-gray-200 rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-blue-500 transition-all hover:border-blue-300 focus:shadow-md'
              required
            />
          </div>

          {/* Password Validation Checklist */}
          {password && (
            <div className='bg-gray-50 p-4 rounded-xl border-2 border-gray-200 space-y-2'>
              <p className='text-xs font-semibold text-gray-600 mb-2'>Password Requirements:</p>
              
              <div className='flex items-center gap-2'>
                {hasCapitalLetter ? (
                  <MdCheckCircle className='w-4 h-4 text-green-500'/>
                ) : (
                  <MdCancel className='w-4 h-4 text-red-500'/>
                )}
                <span className={`text-xs ${hasCapitalLetter ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>
                  At least 1 Capital Letter
                </span>
              </div>

              <div className='flex items-center gap-2'>
                {hasThreeDigits ? (
                  <MdCheckCircle className='w-4 h-4 text-green-500'/>
                ) : (
                  <MdCancel className='w-4 h-4 text-red-500'/>
                )}
                <span className={`text-xs ${hasThreeDigits ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>
                  At least 3 Digits
                </span>
              </div>

              <div className='flex items-center gap-2'>
                {hasAtSymbol ? (
                  <MdCheckCircle className='w-4 h-4 text-green-500'/>
                ) : (
                  <MdCancel className='w-4 h-4 text-red-500'/>
                )}
                <span className={`text-xs ${hasAtSymbol ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>
                  At least 1 @ Symbol
                </span>
              </div>
            </div>
          )}

          {/* Remember & Forgot */}
          <div className='flex justify-between items-center text-sm'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input type="checkbox" className='w-4 h-4 accent-blue-500 rounded cursor-pointer'/>
              <span className='text-gray-600'>Remember me</span>
            </label>
            <a href="#" className='text-blue-500 hover:text-blue-600 font-medium'>Forgot password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading || !isPasswordValid}
            className={`w-full h-12 bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold rounded-xl hover:shadow-lg hover:from-blue-600 hover:to-green-500 transition-all active:scale-95 flex items-center justify-center gap-2 ${!isPasswordValid && password ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <>
                <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                Logging in...
              </>
            ) : (
              'Login to FoodHub'
            )}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className='w-full pt-4 border-t border-gray-200 text-center'>
          <p className='text-gray-600 text-sm mb-2'>Demo Credentials:</p>
          <p className='text-gray-500 text-xs'>Email: any@email.com | Password: Admin@123</p>
        </div>
      </div>
    </div>
  )
}

export default Login