export type Toast = {
    id: string;
    title?: string;
    message: string;
    type?: 'success' | 'info' | 'warning' | 'error';
    action?: {
        label: string;
        onClick(): void;
    };
};
