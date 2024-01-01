'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as RxScrollArea from '@radix-ui/react-scroll-area';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * ScrollArea
 * -----------------------------------------------------------------------------------------------*/
interface ScrollAreaProps extends ComponentPropsWithoutRef<typeof RxScrollArea.Root> {
    orientation?: 'both' | 'horizontal' | 'vertical';
    maxWidth?: string | number;
    maxHeight?: string | number;
}

export const ScrollArea = forwardRef<ElementRef<typeof RxScrollArea.Root>, ScrollAreaProps>(
    // prettier-ignore
    ({ orientation = 'vertical', maxWidth, maxHeight, className, children, ...props }, forwardedRef) => (
        <RxScrollArea.Root ref={forwardedRef} className={cn('relative overflow-hidden', className)} {...props}>
            <RxScrollArea.Viewport className="w-full h-full rounded-[inherit]" style={{ maxWidth, maxHeight }}>
                {children}
            </RxScrollArea.Viewport>

            {['vertical', 'both'].includes(orientation) && (
                <RxScrollArea.Scrollbar orientation="vertical" className={cn('flex p-0.5 select-none touch-none transition-colors data-[orientation=vertical]:w-2 data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:flex-col', { 'hidden': orientation === 'horizontal' })}>
                    <RxScrollArea.Thumb className="relative flex-1 rounded-full bg-gray-8" />
                </RxScrollArea.Scrollbar>
            )}

            {['horizontal', 'both'].includes(orientation) && (
                <RxScrollArea.Scrollbar orientation="horizontal" className={cn('flex p-0.5 select-none touch-none transition-colors data-[orientation=vertical]:w-2 data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:flex-col', { 'hidden': orientation === 'vertical' })}>
                    <RxScrollArea.Thumb className="relative flex-1 rounded-full bg-gray-8" />
                </RxScrollArea.Scrollbar>
            )}

            {orientation === 'both' && <RxScrollArea.Corner />}
        </RxScrollArea.Root>
    ),
);

ScrollArea.displayName = RxScrollArea.Root.displayName;
