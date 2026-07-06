import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'

// Protected Route Component
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }
  return children
}

// Navigation Handler Component
function NavigationHandler({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // navigation to protected routes
    const handlePopState = (event) => {
      const protectedRoutes = ['/home', '/cart']
      const isProtectedRoute = protectedRoutes.some(route => window.location.pathname.includes(route))
      
      if (isProtectedRoute && !isAuthenticated) {
        // Prevent navigation to protected routes without auth
        // Clear history and redirect to login
        window.history.replaceState(null, '', '/')
        navigate('/', { replace: true })
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [isAuthenticated, navigate])

  // Clear forward history when on login page
  useEffect(() => {
    if (location.pathname === '/' && !isAuthenticated) {
      // On login page without auth, clear forward history
      window.history.replaceState({ isLoginPage: true }, '', window.location.href)
    }
  }, [location.pathname, isAuthenticated])

  return null
}

function App() {
  const [cart, setCart] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is authenticated on page load/refresh
    const storedAuth = sessionStorage.getItem('isAuthenticated')
    if (storedAuth) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
      // Clear forward history on page load if not authenticated
      window.history.replaceState({ isLoginPage: true }, '', '/')
    }
  }, [])

  return (
    <Router>
      <NavigationHandler isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route 
          path="/" 
          element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home cart={cart} setCart={setCart} setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Cart cart={cart} setCart={setCart} setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App