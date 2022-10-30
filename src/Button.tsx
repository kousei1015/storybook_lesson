import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

//真ん中のvariant=primaryはデフォルト知を設定している
export const Button = ({children, variant = 'primary', ...props}: Props) => {
  return (
    <button {...props} style={{backgroundColor: variant === 'primary' ? 'blue': 'gray', color: 'white', border: 'none', borderRadius: 100, padding: 10, cursor: 'pointer'}}>
      {children}
    </button>
  )
}

export default Button
