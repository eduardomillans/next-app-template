import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Textarea
 * -----------------------------------------------------------------------------------------------*/
interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {}

export const TextArea = forwardRef<ElementRef<'textarea'>, TextAreaProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => <textarea ref={forwardedRef} className={cn('w-full min-h-[80px] inline-block px-4 py-2 bg-transparent text-sm border border-gray-7 rounded-md placeholder:text-gray-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8 disabled:cursor-not-allowed disabled:opacity-50', className)} {...props} />,
);

TextArea.displayName = 'Textarea';
