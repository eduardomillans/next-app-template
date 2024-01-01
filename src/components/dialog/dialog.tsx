'use client';

import { ComponentPropsWithoutRef } from 'react';
import * as RxDialog from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * DialogRoot
 * -----------------------------------------------------------------------------------------------*/
export const Root = RxDialog.Root;

/* -------------------------------------------------------------------------------------------------
 * DialogTrigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger = RxDialog.Trigger;

/* -------------------------------------------------------------------------------------------------
 * DialogContent
 * -----------------------------------------------------------------------------------------------*/
interface DialogContentProps extends ComponentPropsWithoutRef<typeof RxDialog.Content> {}

// prettier-ignore
export function Content({ className, children, ...props }: DialogContentProps) {
    return (
        <RxDialog.Portal>
            <RxDialog.Overlay className="fixed inset-0 z-50 bg-background/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
            <RxDialog.Content className={cn('w-full max-w-xs sm:max-w-lg grid gap-6 p-6 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-gray-6 rounded-lg shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[45%] data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[45%]', className)} {...props}>
                {children}
                <RxDialog.Close className="absolute top-4 right-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity ring-offset-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-8 disabled:pointer-events-none">
                    <XIcon />
                    <span className="sr-only">Close</span>
                </RxDialog.Close>
            </RxDialog.Content>
        </RxDialog.Portal>
    );
}

/* -------------------------------------------------------------------------------------------------
 * DialogHeader
 * -----------------------------------------------------------------------------------------------*/
interface DialogHeaderProps extends ComponentPropsWithoutRef<'div'> {}

export function Header({ className, ...props }: DialogHeaderProps) {
    return <div className={cn('grid gap-1', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * DialogTitle
 * -----------------------------------------------------------------------------------------------*/
interface DialogTitleProps extends ComponentPropsWithoutRef<typeof RxDialog.Title> {}

export function Title({ className, ...props }: DialogTitleProps) {
    return <RxDialog.Title className={cn('text-lg font-medium', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * DialogDescription
 * -----------------------------------------------------------------------------------------------*/
interface DialogDescriptionProps extends ComponentPropsWithoutRef<typeof RxDialog.Description> {}

export function Description({ className, ...props }: DialogDescriptionProps) {
    return <RxDialog.Description className={cn('text-sm', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * DialogFooter
 * -----------------------------------------------------------------------------------------------*/
interface DialogFooterProps extends ComponentPropsWithoutRef<'div'> {}

export function Footer({ className, ...props }: DialogFooterProps) {
    return <div className={cn('flex flex-col-reverse justify-end gap-4 sm:flex-row sm:items-center', className)} {...props} />;
}
