interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '' 
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-colors';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}