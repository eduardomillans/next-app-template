'use client';

import { ComponentPropsWithoutRef } from 'react';
import * as RxTooltip from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Tooltip
 * -----------------------------------------------------------------------------------------------*/
interface TooltipProps extends ComponentPropsWithoutRef<typeof RxTooltip.Root>, ComponentPropsWithoutRef<typeof RxTooltip.Content> {
    content: string;
}

// prettier-ignore
export function Tooltip({ open, defaultOpen, onOpenChange, delayDuration, disableHoverableContent, content, className, children, sideOffset = 8, ...props }: TooltipProps) {
    return (
        <RxTooltip.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} delayDuration={delayDuration} disableHoverableContent={disableHoverableContent}>
            <RxTooltip.Trigger asChild>{children}</RxTooltip.Trigger>
            <RxTooltip.Portal>
                <RxTooltip.Content
                    sideOffset={sideOffset}
                    className={cn('z-50 p-2 bg-gray-12 text-gray-1 text-xs leading-none rounded shadow overflow-hidden animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className)}
                    {...props}
                >
                    <p>{content}</p>
                </RxTooltip.Content>
            </RxTooltip.Portal>
        </RxTooltip.Root>
    );
}
