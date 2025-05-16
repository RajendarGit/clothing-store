import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section className={['container py-12', className].join(' ')}>{children}</section>
  )
}

export default Container

