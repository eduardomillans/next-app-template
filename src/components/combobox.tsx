'use client';

import { useEffect, useState } from 'react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { Popover } from '@/components/popover';
import { Command } from '@/components/command';
import { Button } from '@/components/button';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Combobox
 * -----------------------------------------------------------------------------------------------*/
export interface ComboboxOption {
    label: string;
    value: string;
    disabled?: boolean;
}

interface ComboboxProps {
    options: ComboboxOption[];
    selected?: ComboboxOption;
    onSelect?(value: ComboboxOption['value']): void;
    placeholder: string;
    label: {
        search: string;
        empty: string;
    };
    className?: string;
    disabled?: boolean;
}

export function Combobox({ options, selected, onSelect, placeholder, label, className, disabled }: ComboboxProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [option, setOption] = useState<ComboboxOption | undefined>(selected);

    useEffect(() => {
        if (option) {
            onSelect?.(option.value);
            setOpen(false);
        }
    }, [onSelect, option]);

    return (
        <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} disabled={disabled} className={cn('w-full justify-between text-start font-normal', className)}>
                    <span>{option?.label || placeholder}</span>
                    <ChevronsUpDownIcon className="shrink-0 opacity-50" />
                </Button>
            </Popover.Trigger>

            <Popover.Content className="w-[var(--radix-popover-trigger-width)] p-0">
                <Command.Content>
                    <Command.Input placeholder={label.search} />
                    <Command.List>
                        <Command.Empty>{label.empty}</Command.Empty>
                        <Command.Group>
                            {options.map(({ label, value, disabled }) => (
                                <Command.Item key={value} disabled={disabled} onSelect={() => setOption({ label, value })}>
                                    <CheckIcon className={cn('opacity-0', { 'opacity-100': option?.value === value })} />
                                    <span>{label}</span>
                                </Command.Item>
                            ))}
                        </Command.Group>
                    </Command.List>
                </Command.Content>
            </Popover.Content>
        </Popover.Root>
    );
}
