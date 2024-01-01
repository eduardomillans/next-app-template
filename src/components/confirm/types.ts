import { ComponentProps, ReactNode } from 'react';
import type { Button } from '@/components/button';

type Variant = ComponentProps<typeof Button>['variant'];

type Action = {
    label: string;
    variant: Variant;
};

export type Confirm = {
    title: string;
    message: ReactNode;
    cancel: Action;
    action: Action;
    onConfirm(ok: boolean): void;
};
