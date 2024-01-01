import type { Confirm } from '@/components/confirm/types';

class Observable {
    constructor(private subscribers: Array<(confirm: Confirm) => void> = []) {}

    subscribe(subscriber: (confirm: Confirm) => void) {
        this.subscribers.push(subscriber);

        return () => {
            const index = this.subscribers.indexOf(subscriber);
            this.subscribers.splice(index, 1);
        };
    }

    notify(confirm: Confirm) {
        for (const subscriber of this.subscribers) {
            subscriber(confirm);
        }
    }
}

export const observer = new Observable();
