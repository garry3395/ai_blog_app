import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-transparent border-blue-500 border-r-blue-400 border-b-blue-300 border-l-blue-200 shadow-lg">
      </div>
    </div>
  )
}

export default Loader