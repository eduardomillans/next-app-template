'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as RxLabel from '@radix-ui/react-label';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/
interface LabelProps extends ComponentPropsWithoutRef<typeof RxLabel.Root> {}

export const Label = forwardRef<ElementRef<typeof RxLabel.Root>, LabelProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => <RxLabel.Root ref={forwardedRef} className={cn('text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className)} {...props} />,
);

Label.displayName = RxLabel.Root.displayName;
