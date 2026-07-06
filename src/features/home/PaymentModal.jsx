import React from 'react'
import { IoCloseSharp } from "react-icons/io5"

function PaymentModal({ 
    showPayment, 
    isProcessing, 
    total, 
    cardNumber, 
    cardHolder, 
    expiryDate, 
    cvv,
    onCardNumberChange,
    onCardHolderChange,
    onExpiryDateChange,
    onCvvChange,
    onSubmit,
    onClose
}) {
    if (!showPayment) {
        return null
    }

    return (
        <>
            {/* Overlay */}
            <div 
                className='fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm' 
                onClick={() => !isProcessing && onClose()}
            ></div>

            {/* Payment Modal */}
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] bg-white rounded-2xl shadow-2xl p-8 z-50 animate-slideUp'>
                
                {/* Header */}
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-3xl font-bold text-gray-800'>💳 Payment Details</h2>
                    <button 
                        onClick={() => !isProcessing && onClose()} 
                        className='p-2 hover:bg-gray-100 rounded-full transition-all'
                    >
                        <IoCloseSharp className='w-[28px] h-[28px] text-gray-600'/>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={onSubmit} className='space-y-5'>
                    
                    {/* Order Summary */}
                    <div className='bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl'>
                        <p className='text-gray-600 text-sm mb-1'>Order Total</p>
                        <h3 className='text-2xl font-bold text-blue-600'>₹{total}</h3>
                    </div>

                    {/* Card Holder Name */}
                    <div>
                        <label className='block text-sm font-semibold text-gray-700 mb-2'>Cardholder Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={cardHolder}
                            onChange={(e) => onCardHolderChange(e.target.value)}
                            className='w-full h-12 px-4 border-2 border-gray-300 rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-blue-500 transition-all'
                            disabled={isProcessing}
                            required
                        />
                    </div>

                    {/* Card Number */}
                    <div>
                        <label className='block text-sm font-semibold text-gray-700 mb-2'>Card Number</label>
                        <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            value={cardNumber}
                            onChange={(e) => onCardNumberChange(e.target.value.replace(/\D/g, '').slice(0, 16))}
                            maxLength="16"
                            className='w-full h-12 px-4 border-2 border-gray-300 rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-blue-500 transition-all'
                            disabled={isProcessing}
                            required
                        />
                    </div>

                    {/* Expiry & CVV */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Expiry Date</label>
                            <input
                                type="text"
                                placeholder="MM/YY"
                                value={expiryDate}
                                onChange={(e) => onExpiryDateChange(e.target.value.slice(0, 5))}
                                maxLength="5"
                                className='w-full h-12 px-4 border-2 border-gray-300 rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-blue-500 transition-all'
                                disabled={isProcessing}
                                required
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>CVV</label>
                            <input
                                type="text"
                                placeholder="123"
                                value={cvv}
                                onChange={(e) => onCvvChange(e.target.value.replace(/\D/g, '').slice(0, 3))}
                                maxLength="3"
                                className='w-full h-12 px-4 border-2 border-gray-300 rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-blue-500 transition-all'
                                disabled={isProcessing}
                                required
                            />
                        </div>
                    </div>

                    {/* Payment Button */}
                    <button
                        type="submit"
                        disabled={isProcessing}
                        className='w-full h-12 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-green-700 transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2'
                    >
                        {isProcessing ? (
                            <>
                                <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                                Processing Payment...
                            </>
                        ) : (
                            `Pay ₹${total}`
                        )}
                    </button>
                </form>
            </div>
        </>
    )
}

export default PaymentModal
