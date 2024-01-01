'use client';

import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useState } from 'react';
import * as RxAvatar from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Avatar
 * -----------------------------------------------------------------------------------------------*/
interface AvatarProps extends ComponentPropsWithoutRef<typeof RxAvatar.Image> {
    fallback: NonNullable<ReactNode>;
}

export const Avatar = forwardRef<ElementRef<typeof RxAvatar.Image>, AvatarProps>(
    // prettier-ignore
    ({ fallback, className, ...props }, forwardedRef) => {
        const [status, setStatus] = useState<RxAvatar.ImageLoadingStatus>('idle');

        const onLoadingStatusChange = (status: RxAvatar.ImageLoadingStatus) => {
            props.onLoadingStatusChange?.(status);
            setStatus(status)
        };

        return (
            <RxAvatar.Root className={cn('w-10 h-10 shrink-0 inline-flex justify-center items-center border border-gray-7 rounded-full bg-background text-foreground aspect-square overflow-hidden', className)}>

                {status === 'error' && (
                    <RxAvatar.Fallback delayMs={0} asChild={typeof fallback !== 'string'}>
                        {fallback}
                    </RxAvatar.Fallback>
                )}

                <RxAvatar.Image ref={forwardedRef} onLoadingStatusChange={onLoadingStatusChange} className="w-full h-full object-contain" {...props} />
            </RxAvatar.Root>
        );
    },
);

Avatar.displayName = 'Avatar';
