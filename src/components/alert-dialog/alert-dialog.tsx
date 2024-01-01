'use client';

import { ComponentPropsWithoutRef } from 'react';
import * as RxAlertDialog from '@radix-ui/react-alert-dialog';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * AlertDialogRoot
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogRootProps extends ComponentPropsWithoutRef<typeof RxAlertDialog.Root> {}

export function Root(props: AlertDialogRootProps) {
    return <RxAlertDialog.Root {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * AlertDialogTrigger
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogTriggerProps extends ComponentPropsWithoutRef<typeof RxAlertDialog.Trigger> {}

export function Trigger({ asChild = true, ...props }: AlertDialogTriggerProps) {
    return <RxAlertDialog.Trigger asChild={asChild} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * AlertDialogContent
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogContentProps extends ComponentPropsWithoutRef<typeof RxAlertDialog.Content> {}

// prettier-ignore
export function Content({ className, ...props }: AlertDialogContentProps) {
    return (
        <RxAlertDialog.Portal>
            <RxAlertDialog.Overlay className="fixed inset-0 z-50 bg-background/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
            <RxAlertDialog.Content className={cn('w-full max-w-xs sm:max-w-lg grid gap-6 p-6 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-gray-6 rounded-lg shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[45%] data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[45%]', className)} {...props} />
        </RxAlertDialog.Portal>
    );
}

/* -------------------------------------------------------------------------------------------------
 * AlertDialogHeader
 * -----------------------------------------------------------------------------------------------*/
interface AlerrtDialogHeaderProps extends ComponentPropsWithoutRef<'div'> {}

export function Header({ className, ...props }: AlerrtDialogHeaderProps) {
    return <div className={cn('grid gap-1', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * AlertDialogTitle
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogTitleProps extends ComponentPropsWithoutRef<typeof RxAlertDialog.Title> {}

export function Title({ className, ...props }: AlertDialogTitleProps) {
    return <RxAlertDialog.Title className={cn('text-lg font-medium', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * AlertDialogDescription
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogDescriptionProps extends ComponentPropsWithoutRef<typeof RxAlertDialog.Description> {}

export function Description({ className, ...props }: AlertDialogDescriptionProps) {
    return <RxAlertDialog.Description className={cn('text-sm', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * AlertDialogFooter
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogFooterProps extends ComponentPropsWithoutRef<'div'> {}

export function Footer({ className, ...props }: AlertDialogFooterProps) {
    return <div className={cn('flex flex-col-reverse justify-end gap-4 sm:flex-row sm:items-center', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * AlertDialogAction
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogActionProps extends ComponentPropsWithoutRef<typeof RxAlertDialog.Action> {}

export function Action({ asChild = true, ...props }: AlertDialogActionProps) {
    return <RxAlertDialog.Action asChild={asChild} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * AlertDialogCancel
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogCancelProps extends ComponentPropsWithoutRef<typeof RxAlertDialog.Cancel> {}

export function Cancel({ asChild = true, ...props }: AlertDialogCancelProps) {
    return <RxAlertDialog.Cancel asChild={asChild} {...props} />;
}
