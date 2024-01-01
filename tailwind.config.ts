import type { Config } from 'tailwindcss';
import twanimate from 'tailwindcss-animate';

const config: Config = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            colors: {
                background: 'hsl(var(--color-background))',
                foreground: 'hsl(var(--color-foreground))',
                gray: {
                    1: 'hsl(var(--color-gray-1))',
                    2: 'hsl(var(--color-gray-2))',
                    3: 'hsl(var(--color-gray-3))',
                    4: 'hsl(var(--color-gray-4))',
                    5: 'hsl(var(--color-gray-5))',
                    6: 'hsl(var(--color-gray-6))',
                    7: 'hsl(var(--color-gray-7))',
                    8: 'hsl(var(--color-gray-8))',
                    9: 'hsl(var(--color-gray-9))',
                    10: 'hsl(var(--color-gray-10))',
                    11: 'hsl(var(--color-gray-11))',
                    12: 'hsl(var(--color-gray-12))',
                },
                primary: {
                    1: 'hsl(var(--color-primary-1))',
                    2: 'hsl(var(--color-primary-2))',
                    3: 'hsl(var(--color-primary-3))',
                },
                success: {
                    1: 'hsl(var(--color-success-1))',
                    2: 'hsl(var(--color-success-2))',
                    3: 'hsl(var(--color-success-3))',
                },
                danger: {
                    1: 'hsl(var(--color-danger-1))',
                    2: 'hsl(var(--color-danger-2))',
                    3: 'hsl(var(--color-danger-3))',
                },
            },
        },
    },
    plugins: [twanimate],
};

export default config;
