import { observer } from '@/components/confirm/observer';
import type { Confirm } from '@/components/confirm/types';

type ConfirmOptions = {
    title?: Confirm['title'];
    cancel?: Partial<Confirm['cancel']>;
    action?: Partial<Confirm['cancel']>;
};

export function confirm(message: Confirm['message'], opts?: ConfirmOptions): Promise<boolean> {
    return new Promise(resolve => {
        observer.notify({
            message,
            title: opts?.title || 'Are you sure?',
            cancel: {
                label: opts?.cancel?.label || 'Cancel',
                variant: opts?.cancel?.variant || 'outline',
            },
            action: {
                label: opts?.action?.label || 'Ok',
                variant: opts?.action?.variant || 'primary',
            },
            onConfirm(ok) {
                resolve(ok);
            },
        });
    });
}
