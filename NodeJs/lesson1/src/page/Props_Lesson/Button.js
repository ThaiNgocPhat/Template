import React from 'react'

const Button = ({onClickFunction,buttonText}) => {
  return (
    <button onClick={onClickFunction}
    className='btn btn-warning'>{buttonText}</button>
  )
}

export default Button