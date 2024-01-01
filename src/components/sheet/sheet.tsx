'use client';

import { ComponentPropsWithoutRef } from 'react';
import * as RxDialog from '@radix-ui/react-dialog';
import { type VariantProps, cva } from 'class-variance-authority';
import { XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// prettier-ignore
const SheetVariants = cva('w-full grid place-content-start gap-6 p-6 fixed z-50 bg-background border-gray-6 rounded-lg shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=closed]:duration-300', {
    variants: {
        side: {
            top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
            bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
            right: 'w-3/4 sm:max-w-sm h-full inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
            left: 'w-3/4 sm:max-w-sm h-full inset-y-0 left-0 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        },
    },
});

/* -------------------------------------------------------------------------------------------------
 * SheetRoot
 * -----------------------------------------------------------------------------------------------*/
export const Root = RxDialog.Root;

/* -------------------------------------------------------------------------------------------------
 * SheetTrigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger = RxDialog.Trigger;

/* -------------------------------------------------------------------------------------------------
 * SheetContent
 * -----------------------------------------------------------------------------------------------*/
interface SheetContentProps extends ComponentPropsWithoutRef<typeof RxDialog.Content>, VariantProps<typeof SheetVariants> {}

export function Content({ side = 'right', className, children, ...props }: SheetContentProps) {
    return (
        <RxDialog.Portal>
            <RxDialog.Overlay className="fixed inset-0 z-50 bg-background/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
            <RxDialog.Content className={cn(SheetVariants({ side, className }))} {...props}>
                {children}
                <RxDialog.Close className="absolute top-4 right-4 rounded-sm opacity-70 text-foreground hover:opacity-100 transition-opacity ring-offset-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-8 disabled:pointer-events-none">
                    <XIcon />
                    <span className="sr-only">Close</span>
                </RxDialog.Close>
            </RxDialog.Content>
        </RxDialog.Portal>
    );
}

/* -------------------------------------------------------------------------------------------------
 * SheetHeader
 * -----------------------------------------------------------------------------------------------*/
interface SheetHeaderProps extends ComponentPropsWithoutRef<'div'> {}

export function Header({ className, ...props }: SheetHeaderProps) {
    return <div className={cn('grid gap-1', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * SheetTitle
 * -----------------------------------------------------------------------------------------------*/
interface SheetTitleProps extends ComponentPropsWithoutRef<typeof RxDialog.Title> {}

export function Title({ className, ...props }: SheetTitleProps) {
    return <RxDialog.Title className={cn('text-lg font-medium', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * SheetDescription
 * -----------------------------------------------------------------------------------------------*/
interface SheetDescriptionProps extends ComponentPropsWithoutRef<typeof RxDialog.Description> {}

export function Description({ className, ...props }: SheetDescriptionProps) {
    return <RxDialog.Description className={cn('text-sm', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * SheetFooter
 * -----------------------------------------------------------------------------------------------*/
interface SheetFooterProps extends ComponentPropsWithoutRef<'div'> {}

export function Footer({ className, ...props }: SheetFooterProps) {
    return <div className={cn('flex flex-col-reverse justify-end gap-4 sm:flex-row sm:items-center', className)} {...props} />;
}
