import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * KBD
 * -----------------------------------------------------------------------------------------------*/
interface KbdProps extends ComponentPropsWithoutRef<'kbd'> {}

// prettier-ignore
export function Kbd({ className, ...props }: KbdProps) {
    return <kbd className={cn('inline-flex justify-center items-center text-center align-middle text-xs font-mono font-semibold tracking-widest p-1.5 select-none pointer-events-none', className)} {...props} />
}
