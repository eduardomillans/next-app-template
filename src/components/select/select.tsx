'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as RxSelect from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * SelectRoot
 * -----------------------------------------------------------------------------------------------*/
export const Root = RxSelect.Root;

/* -------------------------------------------------------------------------------------------------
 * SelectGroup
 * -----------------------------------------------------------------------------------------------*/
export const Group = RxSelect.Group;

/* -------------------------------------------------------------------------------------------------
 * SelectValue
 * -----------------------------------------------------------------------------------------------*/
export const Value = RxSelect.Value;

/* -------------------------------------------------------------------------------------------------
 * SelectTrigger
 * -----------------------------------------------------------------------------------------------*/
interface SelectTriggerProps extends ComponentPropsWithoutRef<typeof RxSelect.Trigger> {}

export const Trigger = forwardRef<ElementRef<typeof RxSelect.Trigger>, SelectTriggerProps>(
    // prettier-ignore
    ({ className, children, ...props }, forwardedRef) => (
        <RxSelect.Trigger ref={forwardedRef} className={cn('w-full h-10 flex justify-between items-center px-4 border border-gray-7 rounded-md bg-background text-sm placeholder:text-gray-10 ring-offset-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-8 disabled:cursor-not-allowed disabled:opacity-50', className)} {...props}>
            {children}
            <RxSelect.Icon asChild>
                <ChevronDownIcon className="opacity-50" />
            </RxSelect.Icon>
        </RxSelect.Trigger>
    ),
);

Trigger.displayName = RxSelect.Trigger.displayName;

/* -------------------------------------------------------------------------------------------------
 * SelectContent
 * -----------------------------------------------------------------------------------------------*/
interface SelectContentProps extends ComponentPropsWithoutRef<typeof RxSelect.Content> {}

// prettier-ignore
export function Content({ position = 'popper', className, children, ...props }: SelectContentProps) {
    return (
        <RxSelect.Portal>
            <RxSelect.Content
                position={position}
                className={cn('min-w-[8rem] relative z-50 bg-background text-foreground border border-gray-6 rounded-md shadow-md overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', { ['w-[var(--radix-select-trigger-width)] min-h-min max-h-[var(--radix-select-content-available-height)] data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1']: position === 'popper', }, className)}
                {...props}
            >
                <RxSelect.ScrollUpButton className="h-[25px] flex justify-center items-center bg-background text-foreground cursor-pointer opacity-50">
                    <ChevronUpIcon />
                </RxSelect.ScrollUpButton>
                <RxSelect.Viewport className="p-1">{children}</RxSelect.Viewport>
                <RxSelect.ScrollDownButton className="h-[25px] flex justify-center items-center bg-background text-foreground cursor-pointer opacity-50">
                    <ChevronDownIcon />
                </RxSelect.ScrollDownButton>
            </RxSelect.Content>
        </RxSelect.Portal>
    );
}

/* -------------------------------------------------------------------------------------------------
 * SelectLabel
 * -----------------------------------------------------------------------------------------------*/
interface SelectLabelProps extends ComponentPropsWithoutRef<typeof RxSelect.Label> {}

export function Label({ className, ...props }: SelectLabelProps) {
    return (
        <div className="grid">
            <RxSelect.Label className={cn('text-sm font-semibold pl-8 pr-2 py-1.5', className)} {...props} />
            <RxSelect.Separator className="h-px -mx-1 my-1 bg-gray-6" />
        </div>
    );
}

/* -------------------------------------------------------------------------------------------------
 * SelectItem
 * -----------------------------------------------------------------------------------------------*/
interface SelectItemProps extends ComponentPropsWithoutRef<typeof RxSelect.Item> {}

export const Item = forwardRef<ElementRef<typeof RxSelect.Item>, SelectItemProps>(
    // prettier-ignore
    ({ className, children, ...props }, forwardedRef) => (
        <RxSelect.Item ref={forwardedRef} className={cn('w-full relative flex items-center pl-8 pr-2 py-1.5 text-sm rounded-sm select-none cursor-pointer outline-none focus:bg-gray-3 focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className)} {...props}>
            <RxSelect.ItemIndicator className="w-3.5 h-3.5 absolute left-2 flex justify-center items-center">
                <CheckIcon />
            </RxSelect.ItemIndicator>
            <RxSelect.ItemText>{children}</RxSelect.ItemText>
        </RxSelect.Item>
    ),
);

Item.displayName = RxSelect.Item.displayName;
