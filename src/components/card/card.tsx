import { ComponentPropsWithoutRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * CardRoot
 * -----------------------------------------------------------------------------------------------*/
interface CardRootProps extends ComponentPropsWithoutRef<'div'> {}

export function Root({ className, ...props }: CardRootProps) {
    return <div className={cn('grid gap-6 p-6 bg-background text-foreground border border-gray-6 rounded-md shadow-sm', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * CardHeader
 * -----------------------------------------------------------------------------------------------*/
interface CardHeaderProps extends ComponentPropsWithoutRef<'div'> {}

export function Header({ className, ...props }: CardHeaderProps) {
    return <div className={cn('grid gap-1', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * CardTitle
 * -----------------------------------------------------------------------------------------------*/
interface CardTitleProps extends ComponentPropsWithoutRef<'h2'> {
    asChild?: boolean;
}

export function Title({ asChild = false, className, ...props }: CardTitleProps) {
    const Component = asChild ? Slot : 'h2';

    return <Component className={cn('text-lg font-semibold', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * CardDescription
 * -----------------------------------------------------------------------------------------------*/
interface CardDescriptionProps extends ComponentPropsWithoutRef<'p'> {
    asChild?: boolean;
}

export function Description({ asChild = false, className, ...props }: CardDescriptionProps) {
    const Component = asChild ? Slot : 'p';

    return <Component className={cn('text-sm', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * CardContent
 * -----------------------------------------------------------------------------------------------*/
interface CardContentProps extends ComponentPropsWithoutRef<'div'> {}

export function Content(props: CardContentProps) {
    return <div {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * CardFooter
 * -----------------------------------------------------------------------------------------------*/
interface CardFooterProps extends ComponentPropsWithoutRef<'div'> {}

export function Footer(props: CardFooterProps) {
    return <div {...props} />;
}
