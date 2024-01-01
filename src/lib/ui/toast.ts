import { observer } from '@/components/toast/observer';
import type { Toast } from '@/components/toast/types';

type ToastOptions = Omit<Toast, 'id' | 'message'>;

function create(message: Toast['message'], opts?: ToastOptions) {
    // prettier-ignore
    const id = '$' + Math.random().toString(36).substring(2, 6 + 2);

    observer.notify({ id, message, ...opts });
}

export const toast = Object.assign(create, {
    success(message: Toast['message']) {
        create(message, { type: 'success' });
    },
    info(message: Toast['message']) {
        create(message, { type: 'info' });
    },
    warning(message: Toast['message']) {
        create(message, { type: 'warning' });
    },
    error(message: Toast['message']) {
        create(message, { type: 'error' });
    },
});
