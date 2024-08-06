import React, { ReactNode } from 'react'

const Title: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <h1 className="text-black text-5xl font-serif">{children}</h1>
  )
}

export default Title
