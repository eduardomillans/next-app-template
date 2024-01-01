'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Command as CmdK } from 'cmdk';
import * as RxDialog from '@radix-ui/react-dialog';
import { SearchIcon, XIcon } from 'lucide-react';
import { ScrollArea } from '@/components/scroll-area';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * CommandDialog
 * -----------------------------------------------------------------------------------------------*/
interface CommandDialogProps extends ComponentPropsWithoutRef<typeof RxDialog.Root> {}

export function Dialog({ children, ...props }: CommandDialogProps) {
    return (
        <RxDialog.Root {...props}>
            <RxDialog.Portal>
                <RxDialog.Overlay className="fixed inset-0 z-50 bg-background/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
                <RxDialog.Content className="w-full max-w-xs sm:max-w-lg grid gap-6 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-gray-6 rounded-lg shadow-lg outline-none overflow-hidden duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[45%] data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[45%]">
                    {children}
                    <RxDialog.Close className="absolute top-4 right-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity ring-offset-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-8 disabled:pointer-events-none">
                        <XIcon />
                        <span className="sr-only">Close</span>
                    </RxDialog.Close>
                </RxDialog.Content>
            </RxDialog.Portal>
        </RxDialog.Root>
    );
}

/* -------------------------------------------------------------------------------------------------
 * CommandContent
 * -----------------------------------------------------------------------------------------------*/
interface CommandContentProps extends ComponentPropsWithoutRef<typeof CmdK> {}

export function Content({ className, ...props }: CommandContentProps) {
    return <CmdK className={cn('w-full grid bg-background text-foreground rounded-md overflow-hidden', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * CommandInput
 * -----------------------------------------------------------------------------------------------*/
interface CommandInputProps extends ComponentPropsWithoutRef<typeof CmdK.Input> {}

export const Input = forwardRef<ElementRef<typeof CmdK.Input>, CommandInputProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => (
        <div cmdk-input-wrapper="" className="w-full h-12 flex items-center gap-2 px-4 py-2 border-b border-gray-6">
            <SearchIcon className="!w-[1.125rem] !h-[1.125rem] text-gray-10" />
            <CmdK.Input ref={forwardedRef} className={cn('w-full h-full text-sm placeholder:text-gray-10 bg-transparent outline-none', className)} {...props} />
        </div>
    ),
);

Input.displayName = CmdK.Input.displayName;

/* -------------------------------------------------------------------------------------------------
 * CommandList
 * -----------------------------------------------------------------------------------------------*/
interface CommandListProps extends ComponentPropsWithoutRef<typeof CmdK.List> {
    maxHeight?: string | number;
}

export function List({ maxHeight = 300, className, children, ...props }: CommandListProps) {
    return (
        <ScrollArea maxHeight={maxHeight}>
            <CmdK.List className={cn('w-full h-full overflow-hidden [&_[cmdk-separator]:last-of-type]:hidden', className)} {...props}>
                {children}
            </CmdK.List>
        </ScrollArea>
    );
}

/* -------------------------------------------------------------------------------------------------
 * CommandEmpty
 * -----------------------------------------------------------------------------------------------*/
interface CommandEmptyProps extends ComponentPropsWithoutRef<typeof CmdK.Empty> {}

export function Empty({ className, ...props }: CommandEmptyProps) {
    return <CmdK.Empty className={cn('text-sm text-center text-gray-10 py-6', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * CommandGroup
 * -----------------------------------------------------------------------------------------------*/
interface CommandGroupProps extends ComponentPropsWithoutRef<typeof CmdK.Group> {}

// prettier-ignore
export function Group({ className, ...props }: CommandGroupProps) {
    return (
        <>
            <CmdK.Group className={cn('w-full p-2 overflow-hidden [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-gray-10 [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1', className)} {...props} />
            <Separator />
        </>
    );
}

/* -------------------------------------------------------------------------------------------------
 * CommandItem
 * -----------------------------------------------------------------------------------------------*/
interface CommandItemProps extends ComponentPropsWithoutRef<typeof CmdK.Item> {}

export const Item = forwardRef<ElementRef<typeof CmdK.Item>, CommandItemProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => <CmdK.Item ref={forwardedRef} className={cn('w-full flex items-center gap-2 p-2 text-sm rounded-md outline-none select-none cursor-pointer aria-selected:bg-gray-3 aria-selected:text-foreground aria-disabled:pointer-events-none aria-disabled:opacity-50', className)} {...props} />,
);

Item.displayName = CmdK.Item.displayName;

/* -------------------------------------------------------------------------------------------------
 * CommandSeparator
 * -----------------------------------------------------------------------------------------------*/
interface CommandSeparatorProps extends ComponentPropsWithoutRef<typeof CmdK.Separator> {}

export function Separator({ className, ...props }: CommandSeparatorProps) {
    return <CmdK.Separator className={cn('h-px -mx-2 bg-gray-6', className)} {...props} />;
}
