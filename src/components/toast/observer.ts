import type { Toast } from '@/components/toast/types';

class Observable {
    constructor(private subscribers: Array<(toast: Toast) => void> = []) {}

    subscribe(subscriber: (toast: Toast) => void) {
        this.subscribers.push(subscriber);

        return () => {
            const index = this.subscribers.indexOf(subscriber);
            this.subscribers.splice(index, 1);
        };
    }

    notify(toast: Toast) {
        for (const subscriber of this.subscribers) {
            subscriber(toast);
        }
    }
}

export const observer = new Observable();
