import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'

function Cart({ cart, setCart, setIsAuthenticated }) {
    const navigate = useNavigate()

    const increaseQty = (id) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id ? {...item, qty: item.qty + 1} : item
            )
        )
    }

    const decreaseQty = (id) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id ? {...item, qty: item.qty - 1} : item
            ).filter(item => item.qty > 0)
        )
    }

    const handleLogout = () => {
        // Clear authentication
        sessionStorage.removeItem('isAuthenticated')
        setIsAuthenticated(false)
        
        // Clear history to prevent forward navigation back to cart
        window.history.replaceState(null, '', '/')
        
        navigate("/", { replace: true })
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

    return (
        <div className='bg-lime-100 w-full min-h-screen'>
            <Nav onSearch={() => {}} onLogout={handleLogout} cartCount={cart.length} onCartClick={() => {}}/>
            <div className='w-full px-5 py-8'>
                <h1 className='text-3xl font-bold mb-5'>Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className='flex flex-col gap-4'>
                        {cart.map(item => (
                            <div key={item.id} className='bg-white p-4 rounded-lg shadow-lg flex justify-between items-center'>
                                <div className='flex items-center gap-4'>
                                    <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded'/>
                                    <div>
                                        <h2 className='text-xl font-semibold'>{item.name}</h2>
                                        <p>₹{item.price}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <button onClick={() => decreaseQty(item.id)} className='bg-red-500 text-white px-3 py-1 rounded'>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => increaseQty(item.id)} className='bg-green-500 text-white px-3 py-1 rounded'>+</button>
                                </div>
                            </div>
                        ))}
                        <div className='bg-white p-4 rounded-lg shadow-lg mt-5'>
                            <h2 className='text-2xl font-bold'>Total: ₹{total}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart