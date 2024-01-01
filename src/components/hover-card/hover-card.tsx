'use client';

import { ComponentPropsWithoutRef } from 'react';
import * as RxHoverCard from '@radix-ui/react-hover-card';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * HoverCardRoot
 * -----------------------------------------------------------------------------------------------*/
export const Root = RxHoverCard.Root;

/* -------------------------------------------------------------------------------------------------
 * HoverCardTrigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger = RxHoverCard.Trigger;

/* -------------------------------------------------------------------------------------------------
 * HoverCardContent
 * -----------------------------------------------------------------------------------------------*/
interface HoverCardContentProps extends ComponentPropsWithoutRef<typeof RxHoverCard.Content> {}

// prettier-ignore
export function Content({ sideOffset = 12, className, ...props }: HoverCardContentProps) {
    return (
        <RxHoverCard.Content
            sideOffset={sideOffset}
            className={cn('w-64 z-50 p-4 bg-background text-foreground border border-gray-6 rounded-md shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className)}
            {...props}
        />
    );
}
