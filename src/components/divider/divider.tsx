'use client';

import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * LineDivider
 * -----------------------------------------------------------------------------------------------*/
interface LineDividerProps {
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}

// prettier-ignore
export function Line({ orientation = 'horizontal', className }: LineDividerProps) {
    return (
        <div
            role="separator"
            data-orientation={orientation}
            className={cn('bg-gray-6 rounded-full data-[orientation=vertical]:w-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-px', className)}
        />
    );
}

/* -------------------------------------------------------------------------------------------------
 * TextDivider
 * -----------------------------------------------------------------------------------------------*/
interface TextDividerProps {
    content: string;
    className?: string;
}

// prettier-ignore
export function Text({ content, className }: TextDividerProps) {
    return (
        <div
            role="none"
            className={cn('w-full flex items-center text-sm text-center text-gray-10 before:h-px before:flex-1 before:bg-gray-6 before:rounded-full before:mr-2 after:h-px after:flex-1 after:bg-gray-6 after:rounded-full after:ml-2', className)}
        >
            {content}
        </div>
    );
}
