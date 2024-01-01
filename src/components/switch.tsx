'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as RxSwitch from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Switch
 * -----------------------------------------------------------------------------------------------*/
interface SwitchProps extends ComponentPropsWithoutRef<typeof RxSwitch.Root> {}

export const Switch = forwardRef<ElementRef<typeof RxSwitch.Root>, SwitchProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => (
        <RxSwitch.Root ref={forwardedRef} className={cn('w-[36px] h-[20px] peer inline-flex items-center p-[2px] rounded-full cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-1 data-[state=unchecked]:bg-gray-5', className)} {...props}>
            <RxSwitch.Thumb className="w-full max-w-[16px] h-full block bg-background rounded-full shadow-lg ring-0 pointer-events-none transition-transform data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-0" />
        </RxSwitch.Root>
    ),
);

Switch.displayName = RxSwitch.Root.displayName;
