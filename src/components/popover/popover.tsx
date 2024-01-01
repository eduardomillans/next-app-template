'use client';

import { ComponentPropsWithoutRef } from 'react';
import * as RxPopover from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * PopoverRoot
 * -----------------------------------------------------------------------------------------------*/
export const Root = RxPopover.Root;

/* -------------------------------------------------------------------------------------------------
 * PopoverTrigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger = RxPopover.Trigger;

/* -------------------------------------------------------------------------------------------------
 * PopoverContent
 * -----------------------------------------------------------------------------------------------*/
interface PopoverContentProps extends ComponentPropsWithoutRef<typeof RxPopover.Content> {}

// prettier-ignore
export function Content({ sideOffset = 12, className, ...props }: PopoverContentProps) {
    return (
        <RxPopover.Portal>
            <RxPopover.Content
                sideOffset={sideOffset}
                className={cn('w-80 z-50 p-4 bg-background text-foreground border border-gray-6 rounded-md shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className)}
                {...props}
            />
        </RxPopover.Portal>
    );
}
