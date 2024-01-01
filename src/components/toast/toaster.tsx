'use client';

import { ElementRef, useEffect, useRef, useState } from 'react';
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/components/icon';
import * as Toast from '@/components/toast/toast';
import { observer } from '@/components/toast/observer';
import type { Toast as ToastType } from '@/components/toast/types';

/* -------------------------------------------------------------------------------------------------
 * Toaster
 * -----------------------------------------------------------------------------------------------*/

// prettier-ignore
export function Toaster() {
    const [state, setState] = useState(0);
    const toastsRef = useRef<ToastType[]>([]);
    const toastRef = useRef<ElementRef<typeof Toast.Root> | null>(null);

    useEffect(() => observer.subscribe(toast => {
        toastsRef.current.push(toast);
        setState(prev => prev + 1);
    }), []);

    useEffect(() => {
        const node = toastRef.current;

        if (node) {
            const height = node.getBoundingClientRect().height;
            node.style.minHeight = `${height}px`;
        }
    }, [state]);

    const onDismiss = (id: ToastType['id']) => (open: boolean) => {
        if (!open) {
            const index = toastsRef.current.findIndex(toast => toast.id === id);
            toastsRef.current.splice(index, 1);
        }
    };

    return (
        <Toast.Provider swipeDirection="down">
            {toastsRef.current.map(toast => (
                <Toast.Root key={toast.id} ref={toastRef} onOpenChange={onDismiss(toast.id)}>
                    <div className="flex items-center gap-2">
                        {toast.type === 'success' && <SuccessIcon className="w-5 h-5" />}
                        {toast.type === 'info' && <InfoIcon className="w-5 h-5" />}
                        {toast.type === 'warning' && <WarningIcon className="w-5 h-5" />}
                        {toast.type === 'error' && <ErrorIcon className="w-5 h-5" />}

                        <div className="grid gap-1">
                            {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
                            <Toast.Description>{toast.message}</Toast.Description>
                        </div>
                    </div>

                    {toast.action && (
                        <Toast.Action altText={toast.action.label} onClick={toast.action.onClick}>
                            {toast.action.label}
                        </Toast.Action>
                    )}
                </Toast.Root>
            ))}

            <Toast.Viewport />
        </Toast.Provider>
    );
}
