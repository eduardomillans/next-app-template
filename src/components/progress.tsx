'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as RxProgress from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Progress
 * -----------------------------------------------------------------------------------------------*/
interface ProgressProps extends ComponentPropsWithoutRef<typeof RxProgress.Root> {}

export const Progress = forwardRef<ElementRef<typeof RxProgress.Root>, ProgressProps>(
    // prettier-ignore
    ({ value = 0, className, ...props }, forwardedRef) => (
        <RxProgress.Root ref={forwardedRef} value={value} className={cn('w-full h-2.5 relative rounded-full bg-gray-5 overflow-hidden', className)} {...props} style={{ transform: 'translateZ(0)' }}>
            <RxProgress.Indicator className="w-full h-full bg-primary-1 transition" style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
        </RxProgress.Root>
    ),
);

Progress.displayName = RxProgress.Root.displayName;
