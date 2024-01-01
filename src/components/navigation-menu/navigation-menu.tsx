'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import NextLink from 'next/link';
import * as RxNavigationMenu from '@radix-ui/react-navigation-menu';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * NavigationMenuRoot
 * -----------------------------------------------------------------------------------------------*/
interface NavigationMenuRootProps extends ComponentPropsWithoutRef<typeof RxNavigationMenu.Root> {}

export function Root({ className, children, ...props }: NavigationMenuRootProps) {
    return (
        <RxNavigationMenu.Root className={cn('max-w-max relative z-10', className)} {...props}>
            {children}
            <Viewport />
        </RxNavigationMenu.Root>
    );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationMenuSub
 * -----------------------------------------------------------------------------------------------*/
export const Sub = RxNavigationMenu.Sub;

/* -------------------------------------------------------------------------------------------------
 * NavigationMenuList
 * -----------------------------------------------------------------------------------------------*/
interface NavigationMenuListProps extends ComponentPropsWithoutRef<typeof RxNavigationMenu.List> {}

export function List({ className, ...props }: NavigationMenuListProps) {
    return <RxNavigationMenu.List className={cn('w-full flex justify-center items-center gap-2', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * NavigationMenuItem
 * -----------------------------------------------------------------------------------------------*/
interface NavigationMenuItemProps extends ComponentPropsWithoutRef<typeof RxNavigationMenu.Item> {}

export function Item(props: NavigationMenuItemProps) {
    return <RxNavigationMenu.Item {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * NavigationMenuTrigger
 * -----------------------------------------------------------------------------------------------*/
interface NavigationMenuTriggerProps extends ComponentPropsWithoutRef<typeof RxNavigationMenu.Trigger> {}

export const Trigger = forwardRef<ElementRef<typeof RxNavigationMenu.Trigger>, NavigationMenuTriggerProps>(
    // prettier-ignore
    ({ className, children, ...props }, forwardedRef) => (
        <RxNavigationMenu.Trigger ref={forwardedRef} className={cn('h-10 w-max group/trigger inline-flex justify-center items-center gap-2 px-4 py-2 bg-background text-sm rounded-md transition-colors hover:bg-gray-3 hover:text-foreground focus:bg-gray-3 focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-3/50 data-[state=open]:bg-gray-3/50', className)} {...props}>
            <span>{children}</span>
            <ChevronDownIcon aria-hidden="true" className="transition duration-300 group-data-[state=open]/trigger:rotate-180" />
        </RxNavigationMenu.Trigger>
    ),
);

Trigger.displayName = RxNavigationMenu.Trigger.displayName;

/* -------------------------------------------------------------------------------------------------
 * NavigationMenuContent
 * -----------------------------------------------------------------------------------------------*/
interface NavigationMenuContentProps extends ComponentPropsWithoutRef<typeof RxNavigationMenu.Content> {}

// prettier-ignore
export function Content({ className, ...props }: NavigationMenuContentProps) {
    return <RxNavigationMenu.Content className={cn('w-auto absolute top-0 left-0 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52', className)} {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * NavigationMenuLink
 * -----------------------------------------------------------------------------------------------*/
interface NavigationMenuLinkProps extends ComponentPropsWithoutRef<typeof NextLink> {
    active?: boolean;
    unstyled?: boolean;
}

// prettier-ignore
export function Link({ active, unstyled, className, ...props }: NavigationMenuLinkProps) {
    return (
        <RxNavigationMenu.Link asChild active={active}>
            <NextLink className={cn({ 'h-10 w-max inline-flex px-4 py-2 bg-background text-sm rounded-md transition-colors hover:bg-gray-3 hover:text-foreground focus:bg-gray-3 focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-3/50 data-[state=open]:bg-gray-3/50': !unstyled }, className)} {...props} />
        </RxNavigationMenu.Link>
    );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationMenuViewport
 * -----------------------------------------------------------------------------------------------*/
interface NavigationMenuViewportProps extends ComponentPropsWithoutRef<typeof RxNavigationMenu.Viewport> {}

export function Viewport(props: NavigationMenuViewportProps) {
    return (
        <div className="w-full absolute top-full left-0">
            <RxNavigationMenu.Viewport
                className="w-[var(--radix-navigation-menu-viewport-width)] h-[var(--radix-navigation-menu-viewport-height)] relative origin-top-center mt-2 bg-background text-foreground border border-gray-6 rounded-md shadow-lg overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90"
                {...props}
            />
        </div>
    );
}
