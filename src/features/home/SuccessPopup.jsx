import React from 'react'
import { MdCheckCircle } from "react-icons/md"

function SuccessPopup({ showSuccess, total, orderId }) {
    if (!showSuccess) {
        return null
    }

    return (
        <>
            {/* Overlay */}
            <div className='fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm'></div>

            {/* Success Popup */}
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white rounded-2xl shadow-2xl p-8 z-50 text-center animate-slideUp'>
                
                {/* Checkmark Icon */}
                <div className='flex justify-center mb-4'>
                    <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-pulse'>
                        <MdCheckCircle className='w-12 h-12 text-green-500'/>
                    </div>
                </div>

                {/* Success Message */}
                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Payment Successful! 🎉</h2>
                <p className='text-gray-600 mb-2'>Your order has been placed successfully</p>
                
                {/* Order Total */}
                <p className='text-lg font-semibold text-blue-600 mb-4'>Order Total: ₹{total}</p>
                
                {/* Order ID */}
                <div className='bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl mb-6'>
                    <p className='text-sm text-gray-600 mb-1'>Order ID</p>
                    <p className='font-bold text-lg text-green-600'>{orderId}</p>
                </div>

                {/* Delivery Info */}
                <p className='text-sm text-gray-500 mb-4'>Your order will be delivered within 30-45 minutes</p>
                
                {/* Auto-redirect Message */}
                <div className='text-xs text-gray-400'>Redirecting to home page...</div>
            </div>
        </>
    )
}

export default SuccessPopup
