'use client';

import { ReactNode } from 'react';
import * as RxTooltip from '@radix-ui/react-tooltip';

export function TooltipProvider({ children }: { children: ReactNode }) {
    return <RxTooltip.Provider>{children}</RxTooltip.Provider>;
}
