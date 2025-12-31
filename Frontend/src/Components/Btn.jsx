import React from 'react'

const Btn = ({text="Get Started"}) => {
  return (
    <button className='btn'>
        {text}
    </button>
  )
}

export default Btn