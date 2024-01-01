import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { TooltipProvider } from '@/components/provider/tooltip-provider';
import { Confirm } from '@/components/confirm';
import { Toaster } from '@/components/toast';

export function AppProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <TooltipProvider>
                {children}
                <Confirm />
                <Toaster />
            </TooltipProvider>
        </ThemeProvider>
    );
}
