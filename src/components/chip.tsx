import { ComponentPropsWithoutRef } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// prettier-ignore
const ChipVariants = cva('h-7 inline-flex justify-center items-center gap-1 px-2 text-xs text-center align-middle bg-background text-foreground border border-gray-7 rounded-full focus:outline-none', {
    variants: {
        variant: {
            primary: 'bg-primary-1 text-primary-3 border-primary-1',
            success: 'bg-success-1 text-success-3 border-success-1',
            danger: 'bg-danger-1 text-danger-3 border-danger-1',
        },
    },
});

/* -------------------------------------------------------------------------------------------------
 * Chip
 * -----------------------------------------------------------------------------------------------*/
interface ChipProps extends ComponentPropsWithoutRef<'span'>, VariantProps<typeof ChipVariants> {}

export function Chip({ variant, className, ...props }: ChipProps) {
    return <span className={cn(ChipVariants({ variant, className }))} {...props} />;
}
