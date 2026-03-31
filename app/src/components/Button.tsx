'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
}: ButtonProps) {
  
  const baseClass = 'rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const variantClasses = {
    primary: 'bg-rose-800 text-white hover:bg-rose-700 focus:ring-rose-800 disabled:bg-rose-300',
    secondary: 'bg-amber-600 text-white hover:bg-amber-500 focus:ring-amber-600 disabled:bg-amber-300',
    outline: 'border-2 border-rose-800 text-rose-800 hover:bg-rose-50 focus:ring-rose-800 disabled:border-rose-300 disabled:text-rose-300',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClass}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${widthClass}
        ${disabledClass}
        ${className}
      `}
    >
      {children}
    </button>
  );
}