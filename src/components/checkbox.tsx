'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react';
import * as RxCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon, MinusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Checkbox
 * -----------------------------------------------------------------------------------------------*/
interface CheckboxProps extends ComponentPropsWithoutRef<typeof RxCheckbox.Root> {}

export const Checkbox = forwardRef<ElementRef<typeof RxCheckbox.Root>, CheckboxProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => {
        const [checked, setChecked] = useState<RxCheckbox.CheckedState | undefined>(props.checked);

        const onCheckedChange = (checked: RxCheckbox.CheckedState) => {
            props.onCheckedChange?.(checked);
            setChecked(checked);
        };

        return (
            <RxCheckbox.Root ref={forwardedRef} onCheckedChange={onCheckedChange} className={cn('w-4 h-4 peer border border-gray-7 rounded-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-1 data-[state=checked]:border-primary-1 data-[state=checked]:text-primary-3 data-[state=indeterminate]:bg-primary-1 data-[state=indeterminate]:border-primary-1 data-[state=indeterminate]:text-primary-3', className)} {...props}>
                <RxCheckbox.Indicator className="w-full h-full flex justify-center items-center text-current">
                    {checked !== 'indeterminate' && <CheckIcon className="!w-full !h-full" />}
                    {checked === 'indeterminate' && <MinusIcon className="!w-full !h-full" />}
                </RxCheckbox.Indicator>
            </RxCheckbox.Root>
        )
    },
);

Checkbox.displayName = 'Checkbox';
