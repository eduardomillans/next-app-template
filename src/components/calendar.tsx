'use client';

import { ComponentPropsWithoutRef } from 'react';
import { DayPicker } from 'react-day-picker';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Calendar
 * -----------------------------------------------------------------------------------------------*/
export type CalendarProps = ComponentPropsWithoutRef<typeof DayPicker>;

// prettier-ignore
export function Calendar({ showOutsideDays = true, numberOfMonths = 1, components, classNames, className, ...props }: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            numberOfMonths={numberOfMonths}
            components={{
                IconLeft: () => <ChevronLeftIcon />,
                IconRight: () => <ChevronRightIcon />,
                ...components,
            }}
            classNames={{
                months: 'flex flex-col items-start sm:flex-row gap-4',
                month: 'grid gap-4',
                caption: 'h-8 relative flex justify-center items-center',
                caption_label: 'text-sm font-semibold',
                nav: cn('w-full absolute grid grid-cols-2 content-start', { 'grid-cols-1': numberOfMonths > 1 }),
                nav_button: 'w-7 h-7 inline-flex justify-center items-center text-sm bg-background text-foreground border border-gray-7 rounded-md ring-offset-background transition-colors hover:bg-gray-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8',
                nav_button_previous: 'justify-self-start',
                nav_button_next: 'justify-self-end',
                table: 'w-full border-collapse',
                head_row: 'flex',
                head_cell: 'min-w-[2.25rem] text-sm text-center font-normal border-collapse opacity-50',
                row: 'w-full flex mt-2',
                cell: 'p-0 border-collapse focus-within:relative [&:has([aria-selected])]:bg-gray-3 [&:has([aria-selected]):first-of-type]:rounded-l [&:has([aria-selected]):last-of-type]:rounded-r',
                day: 'w-9 h-9 inline-flex justify-center items-center text-sm bg-background text-foreground rounded-md cursor-pointer ring-offset-background transition-colors hover:bg-gray-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8 aria-selected:opacity-100',
                day_today: 'font-bold',
                day_outside: 'opacity-50',
                day_disabled: 'opacity-50 pointer-events-none',
                day_hidden: 'invisible',
                day_selected: 'bg-primary-1 text-primary-3 hover:bg-primary-1 hover:text-primary-3 !font-normal opacity-100',
                day_range_middle: 'aria-selected:bg-gray-3 aria-selected:text-foreground',
                ...classNames,
            }}
            className={cn('w-min p-4', className)}
            {...props}
        />
    );
}
