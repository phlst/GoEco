import { cn } from './../utils/cn.js';
import { cva } from 'class-variance-authority';

const button = cva('font-bold text-center rounded-full', {
  variants: {
    variant: {
      primary: 'bg-primary text-black',
      secondary: 'bg-secondary text-white',
    },
    size: {
      sm: 'text-sm py-3 px-5',
      md: 'text-md text-lg py-3 px-20 max-w-md',
      lg: 'text-2xl py-8 px-36 max-w-2xl',
    },
  },
  //418
  //71
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

function Button({ children, size, variant, className }) {
  return (
    <button className={cn(button({ variant, size }), className)}>
      {children}
    </button>
  );
}

export default Button;
