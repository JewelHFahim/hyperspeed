import React from 'react'

const CustomUnderline = ({className}) => {
  return (
    <div className={`mt-6 flex justify-center ${className}`}>
        <span className="w-24 h-1 bg-[var(--color-primary)] rounded-full"></span>
    </div>
  )
}

export default CustomUnderline