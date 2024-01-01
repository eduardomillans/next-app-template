import { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconProps extends LucideProps {}

const defaultAttributes = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
} satisfies IconProps;

export function SuccessIcon({ className, ...initialProps }: IconProps) {
    const props = Object.assign(defaultAttributes, initialProps);

    return (
        <svg className={cn('w-4 h-4', className)} {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                strokeWidth="0"
                fill="currentColor"
            />
        </svg>
    );
}

export function InfoIcon({ className, ...initialProps }: IconProps) {
    const props = Object.assign(defaultAttributes, initialProps);

    return (
        <svg className={cn('w-4 h-4', className)} {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                strokeWidth="0"
                fill="currentColor"
            />
        </svg>
    );
}

export function WarningIcon({ className, ...initialProps }: IconProps) {
    const props = Object.assign(defaultAttributes, initialProps);

    return (
        <svg className={cn('w-4 h-4', className)} {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                strokeWidth="0"
                fill="currentColor"
            />
        </svg>
    );
}

export function ErrorIcon({ className, ...initialProps }: IconProps) {
    const props = Object.assign(defaultAttributes, initialProps);

    return (
        <svg className={cn('w-4 h-4', className)} {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                strokeWidth="0"
                fill="currentColor"
            />
        </svg>
    );
}
