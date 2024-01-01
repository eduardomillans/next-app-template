'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as RxSlider from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Slider
 * -----------------------------------------------------------------------------------------------*/
interface SliderProps extends ComponentPropsWithoutRef<typeof RxSlider.Root> {}

export const Slider = forwardRef<ElementRef<typeof RxSlider.Root>, SliderProps>(
    // prettier-ignore
    ({ defaultValue, value, tabIndex, className, ...props }, forwardedRef) => (
        <RxSlider.Root ref={forwardedRef} defaultValue={defaultValue} value={value} className={cn('w-full relative flex items-center touch-none select-none', className)} {...props}>
            <RxSlider.Track className="w-full h-2 relative grow bg-gray-5 rounded-full overflow-hidden">
                <RxSlider.Range className="h-full absolute bg-primary-1" />
            </RxSlider.Track>
            {(value || defaultValue)?.map((_, index) => (
                <RxSlider.Thumb
                    key={index}
                    {...(tabIndex !== undefined ? { tabIndex } : undefined)}
                    className="w-5 h-5 block bg-background border-2 border-primary-1 rounded-full ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50"
                />
            ))}
        </RxSlider.Root>
    ),
);

Slider.displayName = RxSlider.Root.displayName;
