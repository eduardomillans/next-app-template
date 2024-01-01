import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// prettier-ignore
const ButtonVariants = cva('h-10 inline-flex justify-center items-center text-center align-middle gap-2 px-4 text-sm font-medium bg-background text-foreground rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8 disabled:pointer-events-none disabled:opacity-50', {
    variants: {
        variant: {
            primary: 'bg-primary-1 text-primary-3 border-primary-1 hover:bg-primary-2',
            success: 'bg-success-1 text-success-3 border-success-1 hover:bg-success-2',
            danger: 'bg-danger-1 text-danger-3 border-danger-1 hover:bg-danger-2',
            outline: 'border border-gray-7 hover:bg-gray-3',
            ghost: 'hover:bg-gray-3',
            link: 'hover:underline',
        },
        size: {
            sm: 'h-8 px-2',
            lg: 'h-12 px-8',
        },
        icon: {
            true: 'w-10 p-0',
        },
    },
});

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/
interface ButtonProps extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof ButtonVariants> {
    asChild?: boolean;
}

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
    // prettier-ignore
    ({ variant, size, icon, asChild, className, ...props }, forwardedRef) => {
        const Component = asChild ? Slot : 'button';

        return <Component ref={forwardedRef} className={cn(ButtonVariants({ variant, size, icon, className }))} {...props} />;
    },
);

Button.displayName = 'Button';
