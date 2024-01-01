'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { ScrollArea } from '@/components/scroll-area';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRoot
 * -----------------------------------------------------------------------------------------------*/
export const Root = RxDropdownMenu.Root;

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuTrigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger = RxDropdownMenu.Trigger;

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/
export const RadioGroup = RxDropdownMenu.RadioGroup;

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSub
 * -----------------------------------------------------------------------------------------------*/
export const Sub = RxDropdownMenu.Sub;

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuContent
 * -----------------------------------------------------------------------------------------------*/
interface DropdownMenuContentProps extends ComponentPropsWithoutRef<typeof RxDropdownMenu.Content> {}

// prettier-ignore
export function Content({ sideOffset = 12, className, children, ...props }: DropdownMenuContentProps) {
    return (
        <RxDropdownMenu.Portal>
            <RxDropdownMenu.Content
                sideOffset={sideOffset}
                className={cn('min-w-[8rem] p-1 bg-background text-foreground border border-gray-6 rounded-md shadow-md overflow-hidden [&_[dropdown-menu-group]:last-of-type>[dropdown-menu-separator]]:hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className)}
                {...props}
            >
                <ScrollArea style={{ maxHeight: 'var(--radix-dropdown-menu-content-available-height)' }}>{children}</ScrollArea>
            </RxDropdownMenu.Content>
        </RxDropdownMenu.Portal>
    );
}

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuItem
 * -----------------------------------------------------------------------------------------------*/
interface DropdownMenuItemProps extends ComponentPropsWithoutRef<typeof RxDropdownMenu.Item> {
    inset?: boolean;
}

export const Item = forwardRef<ElementRef<typeof RxDropdownMenu.Item>, DropdownMenuItemProps>(
    // prettier-ignore
    ({ inset, className, ...props }, forwardedRef) => (
        <RxDropdownMenu.Item ref={forwardedRef} className={cn('px-2 py-1.5 text-sm rounded cursor-pointer select-none outline-none focus:bg-gray-3 transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50', { 'pl-8': inset }, className)} {...props} />
    ),
);

Item.displayName = RxDropdownMenu.Item.displayName;

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuGroup
 * -----------------------------------------------------------------------------------------------*/
interface DropdownMenuGroupProps extends ComponentPropsWithoutRef<typeof RxDropdownMenu.Group> {}

export function Group({ children, ...props }: DropdownMenuGroupProps) {
    return (
        <RxDropdownMenu.Group dropdown-menu-group="" {...props}>
            {children}
            <Separator dropdown-menu-separator="" />
        </RxDropdownMenu.Group>
    );
}

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuLabel
 * -----------------------------------------------------------------------------------------------*/
interface DropdownMenuLabelProps extends ComponentPropsWithoutRef<typeof RxDropdownMenu.Label> {
    inset?: boolean;
}

export function Label({ inset, className, ...props }: DropdownMenuLabelProps) {
    return <RxDropdownMenu.Label className={cn('px-2 py-1.5 text-sm font-semibold', { 'pl-8': inset }, className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/
export interface DropdownMenuCheckboxItemProps extends ComponentPropsWithoutRef<typeof RxDropdownMenu.CheckboxItem> {}

export const CheckboxItem = forwardRef<ElementRef<typeof RxDropdownMenu.CheckboxItem>, DropdownMenuCheckboxItemProps>(
    // prettier-ignore
    ({ className, children, ...props }, forwardedRef) => (
        <RxDropdownMenu.CheckboxItem ref={forwardedRef} className={cn('flex items-center gap-2 px-2 py-1.5 text-sm text-foreground rounded cursor-pointer select-none outline-none transition-colors focus:bg-gray-3 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&[data-state=checked]_[dropdown-menu-checkbox]]:bg-primary-1 [&[data-state=checked]_[dropdown-menu-checkbox]]:border-primary-1 [&[data-state=checked]_[dropdown-menu-checkbox]]:text-primary-3', className)} {...props}>
            <div dropdown-menu-checkbox="" className="w-4 h-4 border border-gray-7 rounded-sm">
                <RxDropdownMenu.ItemIndicator className="w-full h-full block text-current">
                    <CheckIcon className="!w-full !h-full" />
                </RxDropdownMenu.ItemIndicator>
            </div>
            {children}
        </RxDropdownMenu.CheckboxItem>
    ),
);

CheckboxItem.displayName = RxDropdownMenu.CheckboxItem.displayName;

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioItem
 * -----------------------------------------------------------------------------------------------*/
interface DropdownMenuRadioItemProps extends ComponentPropsWithoutRef<typeof RxDropdownMenu.RadioItem> {}

export const RadioItem = forwardRef<ElementRef<typeof RxDropdownMenu.RadioItem>, DropdownMenuRadioItemProps>(
    // prettier-ignore
    ({ className, children, ...props }, forwardedRef) => (
        <RxDropdownMenu.RadioItem ref={forwardedRef} className={cn('flex items-center gap-2 px-2 py-1.5 text-sm text-foreground rounded cursor-pointer select-none outline-none transition-colors focus:bg-gray-3 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&[data-state=checked]_[dropdown-menu-radio]]:border-primary-1 [&[data-state=checked]_[dropdown-menu-radio]]:text-primary-1', className)} {...props}>
            <div dropdown-menu-radio="" className="w-4 h-4 p-0.5 border border-gray-7 rounded-full aspect-square">
                <RxDropdownMenu.ItemIndicator>
                    <CircleIcon className="!w-full !h-full fill-current text-current" />
                </RxDropdownMenu.ItemIndicator>
            </div>
            {children}
        </RxDropdownMenu.RadioItem>
    ),
);

RadioItem.displayName = RxDropdownMenu.RadioItem.displayName;

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSeparator
 * -----------------------------------------------------------------------------------------------*/
interface DropdownMenuSeparatorProps extends ComponentPropsWithoutRef<typeof RxDropdownMenu.Separator> {}

export function Separator({ className, ...props }: DropdownMenuSeparatorProps) {
    return <RxDropdownMenu.Separator className={cn('h-px -mx-1 my-1 bg-gray-6', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/
interface DropdownMenuSubTriggerProps extends ComponentPropsWithoutRef<typeof RxDropdownMenu.SubTrigger> {
    inset?: boolean;
}

export const SubTrigger = forwardRef<ElementRef<typeof RxDropdownMenu.SubTrigger>, DropdownMenuSubTriggerProps>(
    // prettier-ignore
    ({ inset, className, children, ...props }, forwardedRef) => (
        <RxDropdownMenu.SubTrigger ref={forwardedRef} className={cn('relative px-2 py-1.5 text-sm rounded cursor-default select-none outline-none focus:bg-gray-3 data-[state=open]:bg-gray-3', { 'pl-8': inset }, className)} {...props}>
            {children}
            <ChevronRightIcon className="absolute top-1/2 right-2 -translate-y-1/2" />
        </RxDropdownMenu.SubTrigger>
    ),
);

SubTrigger.displayName = RxDropdownMenu.SubTrigger.displayName;

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubContent
 * -----------------------------------------------------------------------------------------------*/
interface DropdownMenuSubContentProps extends ComponentPropsWithoutRef<typeof RxDropdownMenu.SubContent> {}

// prettier-ignore
export function SubContent({ sideOffset = 8, className, ...props }: DropdownMenuSubContentProps) {
    return (
        <RxDropdownMenu.Portal>
            <RxDropdownMenu.SubContent
                sideOffset={sideOffset}
                className={cn('min-w-[8rem] p-1 bg-background text-foreground border border-gray-6 rounded-md shadow-lg overflow-hidden [&_[dropdown-menu-group]:last-of-type>[dropdown-menu-separator]]:hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className)}
                {...props}
            />
        </RxDropdownMenu.Portal>
    );
}
