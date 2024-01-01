'use client';

import { CalendarIcon } from 'lucide-react';
import { Popover } from '@/components/popover';
import { Button } from '@/components/button';
import { Calendar, type CalendarProps } from '@/components/calendar';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * DatePicker
 * -----------------------------------------------------------------------------------------------*/
type DatePickerProps = CalendarProps & {
    placeholder: string;
    label?: string;
};

export function DatePicker({ placeholder, label, className, ...props }: DatePickerProps) {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="outline" className={cn('w-full justify-start gap-2 text-start font-normal', className)}>
                    <CalendarIcon className="shrink-0" />
                    <span>{label || placeholder}</span>
                </Button>
            </Popover.Trigger>

            <Popover.Content className="w-auto p-0">
                <Calendar {...props} />
            </Popover.Content>
        </Popover.Root>
    );
}
