'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as RxRadioGroup from '@radix-ui/react-radio-group';
import { CircleIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * RadioGroupRoot
 * -----------------------------------------------------------------------------------------------*/
interface RadioGroupRootProps extends ComponentPropsWithoutRef<typeof RxRadioGroup.Root> {}

export const Root = forwardRef<ElementRef<typeof RxRadioGroup.Root>, RadioGroupRootProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => <RxRadioGroup.Root ref={forwardedRef} className={cn('flex flex-col gap-2 [&[aria-orientation=horizontal]]:flex-row', className)} {...props} />,
);

Root.displayName = RxRadioGroup.Root.displayName;

/* -------------------------------------------------------------------------------------------------
 * RadioGroupItem
 * -----------------------------------------------------------------------------------------------*/
interface RadioGroupItemProps extends ComponentPropsWithoutRef<typeof RxRadioGroup.Item> {}

export const Item = forwardRef<ElementRef<typeof RxRadioGroup.Item>, RadioGroupItemProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => (
        <RxRadioGroup.Item ref={forwardedRef} className={cn('w-4 h-4 peer p-0.5 border border-gray-7 rounded-full aspect-square ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8 disabled:cursor-not-allowed disable:opacity-50 data-[state=checked]:text-primary-1 data-[state=checked]:border-primary-1', className)} {...props}>
            <RxRadioGroup.Indicator>
                <CircleIcon className={cn('!w-full !h-full fill-current text-current')} />
            </RxRadioGroup.Indicator>
        </RxRadioGroup.Item>
    ),
);

Item.displayName = RxRadioGroup.Item.displayName;
