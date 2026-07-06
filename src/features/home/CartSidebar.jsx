import React from 'react'
import { IoCloseSharp } from "react-icons/io5"

function CartSidebar({ cart, showCart, onClose, onCheckout, increaseQty, decreaseQty }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

    if (!showCart) {
        return null
    }

    return (
        <>
            {/* Overlay */}
            <div 
                className='fixed inset-0 bg-black bg-opacity-40 z-40 backdrop-blur-sm' 
                onClick={onClose}
            ></div>

            {/* Cart Sidebar */}
            <div className='fixed right-0 top-0 h-full w-[480px] bg-white shadow-2xl z-50 overflow-hidden flex flex-col animate-slideIn'>
                
                {/* Header */}
                <div className='flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'>
                    <h1 className='text-2xl font-bold'>🛒 Your Cart</h1>
                    <button 
                        onClick={onClose} 
                        className='p-2 hover:bg-blue-700 rounded-full transition-all active:scale-90'
                    >
                        <IoCloseSharp className='w-[28px] h-[28px]'/>
                    </button>
                </div>
                
                {/* Items Container */}
                <div className='flex-1 overflow-y-auto p-5 space-y-3'>
                    {cart.length === 0 ? (
                        <div className='flex flex-col items-center justify-center h-full text-center'>
                            <div className='text-6xl mb-3'>🍔</div>
                            <p className='text-gray-500 text-lg font-semibold'>Your cart is empty</p>
                            <p className='text-gray-400 text-sm mt-1'>Add some delicious food!</p>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-3'>
                            {cart.map(item => (
                                <div 
                                    key={item.id} 
                                    className='bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl flex gap-3 hover:shadow-md transition-all'
                                >
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className='w-20 h-20 object-cover rounded-lg shadow-sm'
                                    />
                                    <div className='flex-1 flex flex-col justify-between'>
                                        <div>
                                            <h3 className='font-bold text-gray-800 text-sm'>{item.name}</h3>
                                            <p className='text-blue-600 font-semibold text-sm'>₹{item.price} x {item.qty}</p>
                                        </div>
                                        <div className='flex items-center gap-2 bg-white rounded-lg p-1 w-fit'>
                                            <button 
                                                onClick={() => decreaseQty(item.id)} 
                                                className='bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold hover:bg-red-600 transition-colors active:scale-95'
                                            >
                                                −
                                            </button>
                                            <span className='px-3 py-1 font-bold text-gray-700 min-w-[30px] text-center'>
                                                {item.qty}
                                            </span>
                                            <button 
                                                onClick={() => increaseQty(item.id)} 
                                                className='bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold hover:bg-green-600 transition-colors active:scale-95'
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer - Total & Checkout */}
                {cart.length > 0 && (
                    <div className='bg-gradient-to-t from-gray-100 to-transparent p-4 border-t-2 border-gray-200 space-y-4'>
                        <div className='bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl'>
                            <p className='text-gray-600 text-sm mb-1'>Total Amount</p>
                            <h2 className='text-3xl font-bold text-blue-600'>₹{total}</h2>
                        </div>
                        <button 
                            onClick={onCheckout} 
                            className='w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg active:scale-95 hover:shadow-xl'
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default CartSidebar
