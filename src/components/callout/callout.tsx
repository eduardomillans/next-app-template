import { ComponentPropsWithoutRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const CalloutVariants = cva('w-full relative flex items-center gap-4 p-4 bg-background text-foreground border border-gray-7 rounded-md', {
    variants: {
        variant: {
            primary: 'bg-primary-1 text-primary-3 border-primary-1',
            success: 'bg-success-1 text-success-3 border-success-1',
            danger: 'bg-danger-1 text-danger-3 border-danger-1',
        },
    },
});

/* -------------------------------------------------------------------------------------------------
 * CalloutRoot
 * -----------------------------------------------------------------------------------------------*/
interface CalloutRootProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof CalloutVariants> {}

export function Root({ variant, className, ...props }: CalloutRootProps) {
    return <div role="alert" className={cn(CalloutVariants({ variant, className }))} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * CalloutIcon
 * -----------------------------------------------------------------------------------------------*/
interface CalloutIconProps extends ComponentPropsWithoutRef<typeof Slot> {}

export function Icon({ className, ...props }: CalloutIconProps) {
    return <Slot className="text-current" {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * CalloutText
 * -----------------------------------------------------------------------------------------------*/
interface CalloutTextProps extends ComponentPropsWithoutRef<'p'> {}

export function Text({ className, ...props }: CalloutTextProps) {
    return <p className="text-sm leading-5" {...props} />;
}
