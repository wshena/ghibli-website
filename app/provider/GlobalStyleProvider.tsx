import React from 'react'

interface Props {
  children: React.ReactNode
}

const GlobalStyleProvider = ({children}:Props) => {
  return (
    <div className=''>
      {children}
    </div>
  )
}

export default GlobalStyleProvider