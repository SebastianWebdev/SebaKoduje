import React, { useState } from "react"

const Button = ({ className, handleClick, children, downClass }) => {
  const [isDown, setIsDown] = useState(false)
  const handleDown = e => {
    e.preventDefault()
    setIsDown(true)
  }
  const handleUp = e => {
    e.preventDefault()
    setIsDown(false)
  }

  return (
    <button
      className={`${className} ${isDown ? downClass : ""}`}
      onClick={handleClick}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
    >
      {children}
    </button>
  )
}
export default Button
