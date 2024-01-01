'use client';

import { useEffect, useRef, useState } from 'react';
import { AlertDialog } from '@/components/alert-dialog';
import { Button } from '@/components/button';
import { observer } from '@/components/confirm/observer';
import type { Confirm as ConfirmType } from '@/components/confirm/types';

/* -------------------------------------------------------------------------------------------------
 * Confirm
 * -----------------------------------------------------------------------------------------------*/

// prettier-ignore
export function Confirm() {
    const [open, setOpen] = useState<boolean>(false);
    const confirmRef = useRef<ConfirmType | null>(null);

    useEffect(() => observer.subscribe(confirm => {
        confirmRef.current = confirm;
        setOpen(true);
    }), []);

    const onAction = (ok: boolean) => {
        confirmRef.current?.onConfirm(ok);
        setOpen(false);
    };

    return (
        <AlertDialog.Root open={open}>
            <AlertDialog.Content>
                <AlertDialog.Header>
                    <AlertDialog.Title>{confirmRef.current?.title}</AlertDialog.Title>
                    <AlertDialog.Description>{confirmRef.current?.message}</AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                    <AlertDialog.Cancel asChild>
                        <Button variant={confirmRef.current?.cancel.variant} onClick={() => onAction(false)}>
                            {confirmRef.current?.cancel.label}
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                        <Button variant={confirmRef.current?.action.variant} onClick={() => onAction(true)}>
                            {confirmRef.current?.action.label}
                        </Button>
                    </AlertDialog.Action>
                </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}
