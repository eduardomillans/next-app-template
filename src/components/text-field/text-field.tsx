'use client';

import { ComponentPropsWithoutRef, ElementRef, createContext, forwardRef, useContext } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// prettier-ignore
const TextFieldVariant = cva('w-full h-10 flex items-center gap-2 px-4 bg-background text-sm border border-gray-7 rounded-md [&:has(input:focus)]:ring-offset-background [&:has(input:focus)]:ring-2 [&:has(input:focus)]:ring-offset-2 [&:has(input:focus)]:ring-gray-8 [&:has(input:disabled)]:cursor-not-allowed', {
    variants: {
        size: {
            sm: 'h-8',
            lg: 'h-12',
        },
    },
});

/* -------------------------------------------------------------------------------------------------
 * TextFieldContext
 * -----------------------------------------------------------------------------------------------*/
const TextFieldContext = createContext<boolean>(false);

/* -------------------------------------------------------------------------------------------------
 * TextFieldRoot
 * -----------------------------------------------------------------------------------------------*/
interface TextFieldRootProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof TextFieldVariant> {}

// prettier-ignore
export function Root({ size, className, ...props }: TextFieldRootProps) {
    return (
        <TextFieldContext.Provider value={true}>
            <div className={cn(TextFieldVariant({ size, className }))} {...props} />
        </TextFieldContext.Provider>
    )
}

/* -------------------------------------------------------------------------------------------------
 * TextFieldSlot
 * -----------------------------------------------------------------------------------------------*/
interface TextFieldSlotProps extends ComponentPropsWithoutRef<'div'> {}

export function Slot({ className, ...props }: TextFieldSlotProps) {
    return <div className={cn('flex items-center shrink-0 text-gray-10', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * Input
 * -----------------------------------------------------------------------------------------------*/
interface TextFieldInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>, VariantProps<typeof TextFieldVariant> {
    classNames?: {
        root?: string;
    };
}

export const Input = forwardRef<ElementRef<'input'>, TextFieldInputProps>(
    // prettier-ignore
    ({ size, classNames, className, ...props }, forwardedRef) => {
        const hasRoot = useContext(TextFieldContext);

        const input = <input ref={forwardedRef} className={cn('w-full inline-block text-sm bg-transparent placeholder:text-gray-10 file:h-full file:bg-transparent file:font-semibold file:border-0 file:m-0 file:p-0 file:pr-2 file:cursor-pointer [&[type=file]]:cursor-pointer focus-visible:outline-none disabled:!cursor-not-allowed file:disabled:!cursor-not-allowed disabled:opacity-50', className)} {...props} />

        if (hasRoot) {
            return input;
        }

        return (
            <Root size={size} className={classNames?.root}>
                {input}
            </Root>
        );
    },
);

Input.displayName = 'Input';
