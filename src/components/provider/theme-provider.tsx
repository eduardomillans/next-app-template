'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';

type Theme = 'system' | 'light' | 'dark';

/* -------------------------------------------------------------------------------------------------
 * ThemeContext
 * -----------------------------------------------------------------------------------------------*/
type ThemeContextState = {
    theme: Theme;
    setTheme(theme: Theme): void;
};

export const ThemeContext = createContext<ThemeContextState | null>(null);

/* -------------------------------------------------------------------------------------------------
 * ThemeProvider
 * -----------------------------------------------------------------------------------------------*/
type ThemeProviderProps = {
    defaultTheme?: Theme;
    storageKey?: string;
    children: ReactNode;
};

export function ThemeProvider({ defaultTheme = 'system', storageKey = 'ui-theme', children }: ThemeProviderProps) {
    const [state, setState] = useState<Theme>(() => {
        if (typeof window === 'undefined') return defaultTheme;

        return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    });

    const setTheme = (theme: Theme) => {
        // Get root element
        const root = window.document.documentElement;

        // Remove theme classes of root element
        root.classList.remove('light', 'dark');

        // Apply classes and styles
        root.classList.add(theme);
        root.style.colorScheme = theme;
    };

    useEffect(() => {
        if (state !== 'system') return setTheme(state);

        const onThemeChange = ({ matches }: MediaQueryListEvent) => setTheme(matches ? 'dark' : 'light');

        const media = window.matchMedia('(prefers-color-scheme: dark)');

        media.addEventListener('change', onThemeChange);

        setTheme(media.matches ? 'dark' : 'light');

        return () => media.removeEventListener('change', onThemeChange);
    }, [state]);

    const value: ThemeContextState = {
        theme: state,
        setTheme(theme) {
            localStorage.setItem(storageKey, theme);
            setState(theme);
        },
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
