import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as RxToast from '@radix-ui/react-toast';
import { XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * ToastProvider
 * -----------------------------------------------------------------------------------------------*/
export const Provider = RxToast.Provider;

/* -------------------------------------------------------------------------------------------------
 * ToastViewport
 * -----------------------------------------------------------------------------------------------*/
interface ToastViewportProps extends ComponentPropsWithoutRef<typeof RxToast.Viewport> {}

// prettier-ignore
export function Viewport({ className, ...props }: ToastViewportProps) {
    return <RxToast.Viewport className={cn('w-full md:max-w-[420px] max-h-screen fixed bottom-0 sm:right-0 z-[100] flex flex-col gap-4 p-4 rounded overflow-hidden outline-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8', className)} {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * ToastRoot
 * -----------------------------------------------------------------------------------------------*/
interface ToastRootProps extends ComponentPropsWithoutRef<typeof RxToast.Root> {}

export const Root = forwardRef<ElementRef<typeof RxToast.Root>, ToastRootProps>(
    // prettier-ignore
    ({ className, children, ...props }, forwardRef) => (
        <RxToast.Root ref={forwardRef} className={cn('w-full group relative flex justify-between items-center gap-2 p-4 pr-8 bg-background text-foreground border border-gray-6 rounded-md shadow-lg pointer-events-auto overflow-hidden transition-all outline-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8 data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full data-[swipe=move]:transition-none data-[swipe=move]:translate-y-[var(--radix-toast-swipe-move-y)] data-[swipe=cancel]:translate-y-0 data-[swipe=end]:translate-y-[var(--radix-toast-swipe-end-y)]', className)} {...props}>
            {children}
            <RxToast.Close className="absolute top-2 right-2 rounded-sm text-foreground/70 opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100 ring-offset-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-8 disabled:pointer-events-none">
                <XIcon />
                <span className="sr-only">Close</span>
            </RxToast.Close>
        </RxToast.Root>
    ),
);

Root.displayName = RxToast.Root.displayName;

/* -------------------------------------------------------------------------------------------------
 * ToastTitle
 * -----------------------------------------------------------------------------------------------*/
interface ToastTitleProps extends ComponentPropsWithoutRef<typeof RxToast.Title> {}

export function Title({ className, ...props }: ToastTitleProps) {
    return <RxToast.Title className={cn('text-[13px] font-semibold', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * ToastDescription
 * -----------------------------------------------------------------------------------------------*/
interface ToastDescriptionProps extends ComponentPropsWithoutRef<typeof RxToast.Description> {}

export function Description({ className, ...props }: ToastDescriptionProps) {
    return <RxToast.Description className={cn('text-[13px]', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * ToastAction
 * -----------------------------------------------------------------------------------------------*/
interface ToastActionProps extends ComponentPropsWithoutRef<typeof RxToast.Action> {}

// prettier-ignore
export function Action({ className, ...props }: ToastActionProps) {
    return <RxToast.Action className={cn('h-8 inline-flex shrink-0 justify-center items-center text-center align-middle gap-2 px-2 text-xs font-medium bg-background text-foreground border border-gray-7 hover:bg-gray-3 rounded ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8 disabled:pointer-events-none disabled:opacity-50', className)} {...props} />
}
