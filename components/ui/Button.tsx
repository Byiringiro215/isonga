'use client'
import clsx from 'clsx';
import React from 'react'

interface buttonProps{
  title?: string;
  disabled?: boolean;
  variant: 'primary' | 'secondary';
  icon?: React.ReactNode;
  onClick: () => void;
}

const Button = ({title,onClick,variant,icon,disabled}:buttonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={clsx('px-4 py-2  flex gap-2 items-center cursor-pointer', {
      'bg-blue-500 text-white': variant === 'primary',
      'bg-[#2D3748] text-white': variant === 'secondary',
      'opacity-50 cursor-not-allowed bg-gray-300': disabled,
    })}>
      {icon}
      {title}
    </button>
  )
}

export default Button
