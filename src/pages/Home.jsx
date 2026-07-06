import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Card from '../components/Card'
import { food_items } from '../food'
import CategoriesFilter from '../features/home/CategoriesFilter'
import CartSidebar from '../features/home/CartSidebar'
import PaymentModal from '../features/home/PaymentModal'
import SuccessPopup from '../features/home/SuccessPopup'

/**
 * Home.jsx - Main Shopping Page
 * 
 * Features:
 * - Product browsing with search and filtering
 * - Shopping cart management
 * - Payment processing
 * - Order confirmation
 * 
 * Props:
 * - cart: Array of items in cart
 * - setCart: Function to update cart
 * - setIsAuthenticated: Function to update auth status (for logout)
 */

function Home({ cart, setCart, setIsAuthenticated }) {
    // ============ STATE MANAGEMENT ============
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")
    const [showCart, setShowCart] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [orderId, setOrderId] = useState("")
    
    // Payment form state
    const [cardNumber, setCardNumber] = useState("")
    const [cardHolder, setCardHolder] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [cvv, setCvv] = useState("")
    const [isProcessing, setIsProcessing] = useState(false)
    
    const navigate = useNavigate()

    // ============ FILTERING LOGIC ============
    const filteredItems = food_items.filter((item) => {
        const matchesCategory = selectedCategory === "all" || 
            item.food_category.toLowerCase() === selectedCategory.toLowerCase()
        const matchesSearch = item.food_name.toLowerCase()
            .includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    // ============ CATEGORY & SEARCH HANDLERS ============
    const handleFilterType = (category) => {
        setSelectedCategory(category.toLowerCase())
    }

    const handleSearch = (term) => {
        setSearchTerm(term)
    }

    // ============ AUTHENTICATION HANDLER ============
    const handleLogout = () => {
        // Clear authentication
        sessionStorage.removeItem('isAuthenticated')
        setIsAuthenticated(false)
        
        // Clear history to prevent forward navigation back to home
        window.history.replaceState(null, '', '/')
        
        navigate("/", { replace: true })
    }

    // ============ CART MANAGEMENT ============
    const handleAddToCart = (item) => {
        setCart(prevCart => {
            const existing = prevCart.find(cartItem => cartItem.id === item.id)
            if (existing) {
                // Item already in cart - increase quantity
                return prevCart.map(cartItem => 
                    cartItem.id === item.id 
                        ? { ...cartItem, qty: cartItem.qty + 1 } 
                        : cartItem
                )
            } else {
                // New item - add to cart
                return [...prevCart, { ...item, qty: 1 }]
            }
        })
    }

    const handleIncreaseQty = (id) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        )
    }

    const handleDecreaseQty = (id) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id ? { ...item, qty: item.qty - 1 } : item
            ).filter(item => item.qty > 0)
        )
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

    // ============ PAYMENT HANDLER ============
    const handlePayment = (e) => {
        e.preventDefault()
        
        // Validate all fields are filled
        if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
            alert('Please fill all payment details')
            return
        }

        setIsProcessing(true)
        
        // Simulate 1.5 second payment processing
        setTimeout(() => {
            setIsProcessing(false)
            setShowPayment(false)
            
            // Generate unique Order ID
            const newOrderId = `ORD-${Math.random().toString(36).substring(7).toUpperCase()}`
            setOrderId(newOrderId)
            setShowSuccess(true)
            
            // Show success popup for 3 seconds then reset
            setTimeout(() => {
                setShowSuccess(false)
                // Clear cart after successful payment
                setCart([])
                setCardNumber("")
                setCardHolder("")
                setExpiryDate("")
                setCvv("")
            }, 3000)
        }, 1500)
    }

    // ============ RENDER ============
    return (
        <div className='bg-lime-100 w-full min-h-screen'>
            {/* Navbar Component */}
            <Nav 
                onSearch={handleSearch} 
                onLogout={handleLogout} 
                cartCount={cart.length} 
                onCartClick={() => setShowCart(!showCart)}
            />

            {/* Categories Filter Component */}
            <CategoriesFilter 
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
                onCategorySelect={handleFilterType}
            />

            {/* Products Grid */}
            <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
                {filteredItems.map((item) => (
                    <Card 
                        key={item.id} 
                        name={item.food_name} 
                        image={item.food_image} 
                        price={item.price} 
                        type={item.food_type} 
                        id={item.id} 
                        addToCart={handleAddToCart} 
                        cart={cart} 
                        increaseQty={handleIncreaseQty} 
                        decreaseQty={handleDecreaseQty}
                    />
                ))}
            </div>

            {/* Cart Sidebar Component */}
            <CartSidebar 
                cart={cart}
                showCart={showCart}
                onClose={() => setShowCart(false)}
                onCheckout={() => setShowPayment(true)}
                increaseQty={handleIncreaseQty}
                decreaseQty={handleDecreaseQty}
            />

            {/* Payment Modal Component */}
            <PaymentModal 
                showPayment={showPayment}
                isProcessing={isProcessing}
                total={total}
                cardNumber={cardNumber}
                cardHolder={cardHolder}
                expiryDate={expiryDate}
                cvv={cvv}
                onCardNumberChange={setCardNumber}
                onCardHolderChange={setCardHolder}
                onExpiryDateChange={setExpiryDate}
                onCvvChange={setCvv}
                onSubmit={handlePayment}
                onClose={() => setShowPayment(false)}
            />

            {/* Success Popup Component */}
            <SuccessPopup 
                showSuccess={showSuccess}
                total={total}
                orderId={orderId}
            />
        </div>
    )
}

export default Home