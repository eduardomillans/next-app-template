import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { ScrollArea } from '@/components/scroll-area';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * TableRoot
 * -----------------------------------------------------------------------------------------------*/
interface TableRootProps extends ComponentPropsWithoutRef<'table'> {}

export const Root = forwardRef<ElementRef<'table'>, TableRootProps>(
    // prettier-ignore
    ({ className, style, ...props }, forwardedRef) => (
        <ScrollArea orientation="both" className={cn('w-full border border-gray-6 rounded-md', className)} style={style}>
            <table ref={forwardedRef} className="w-full"  {...props} />
        </ScrollArea>
    ),
);

Root.displayName = 'Table';

/* -------------------------------------------------------------------------------------------------
 * TableHead
 * -----------------------------------------------------------------------------------------------*/
interface TableHeadProps extends ComponentPropsWithoutRef<'thead'> {}

export const Head = forwardRef<ElementRef<'thead'>, TableHeadProps>(
    // prettier-ignore
    (props, forwardedRef) => <thead ref={forwardedRef} {...props} />,
);

Head.displayName = 'TableHead';

/* -------------------------------------------------------------------------------------------------
 * TableBody
 * -----------------------------------------------------------------------------------------------*/
interface TableBodyProps extends ComponentPropsWithoutRef<'tbody'> {}

export const Body = forwardRef<ElementRef<'tbody'>, TableBodyProps>(
    // prettier-ignore
    ({ ...props }, forwardedRef) => <tbody ref={forwardedRef} {...props} />,
);

Body.displayName = 'TableBody';

/* -------------------------------------------------------------------------------------------------
 * TableRow
 * -----------------------------------------------------------------------------------------------*/
interface TableRowProps extends ComponentPropsWithoutRef<'tr'> {}

export const Row = forwardRef<ElementRef<'tr'>, TableRowProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => <tr ref={forwardedRef} className={cn('border-b border-gray-6 [tbody_&]:last:border-b-0 [tfoot_&]:last:border-b-0 [tfoot_&]:border-t [tbody_&]:hover:bg-gray-3 [tfoot_&]:hover:bg-gray-3 transition-colors', className)} {...props} />,
);

Row.displayName = 'TableRow';

/* -------------------------------------------------------------------------------------------------
 * TableColumn
 * -----------------------------------------------------------------------------------------------*/
interface TablePropsColumn extends ComponentPropsWithoutRef<'th'> {}

export const Column = forwardRef<ElementRef<'th'>, TablePropsColumn>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => <th ref={forwardedRef} className={cn('h-10 px-4 [&:has(button)]:px-0 text-xs text-start font-medium align-middle', className)} {...props} />,
);

Column.displayName = 'TableColumn';

/* -------------------------------------------------------------------------------------------------
 * TableCell
 * -----------------------------------------------------------------------------------------------*/
interface TableCellProps extends ComponentPropsWithoutRef<'td'> {}

export const Cell = forwardRef<ElementRef<'td'>, TableCellProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => <td ref={forwardedRef} className={cn('h-12 px-4 text-sm text-start align-middle', className)} {...props} />,
);

Cell.displayName = 'TableCell';

/* -------------------------------------------------------------------------------------------------
 * TableCaption
 * -----------------------------------------------------------------------------------------------*/
interface TableCaptionProps extends ComponentPropsWithoutRef<'caption'> {}

export const Caption = forwardRef<ElementRef<'caption'>, TableCaptionProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => <caption ref={forwardedRef} className={cn('caption-bottom py-4 text-xs text-gray-10 font-medium', className)} {...props} />,
);

Caption.displayName = 'TableCaption';

/* -------------------------------------------------------------------------------------------------
 * TableFooter
 * -----------------------------------------------------------------------------------------------*/
interface TableFooterProps extends ComponentPropsWithoutRef<'tfoot'> {}

export const Footer = forwardRef<ElementRef<'tfoot'>, TableFooterProps>(
    // prettier-ignore
    ({ className, ...props }, forwardedRef) => <tfoot ref={forwardedRef} className={cn('font-medium', className)} {...props} />,
);

Footer.displayName = 'TableFooter';
