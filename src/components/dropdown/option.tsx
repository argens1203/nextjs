'use client';

import React, { useContext } from 'react';
import { SelectContext } from './select-context';
import { useListItem } from '@floating-ui/react';

type Props = { label: string; onClick: () => void };

export function Option(props: Props) {
    const { label, onClick } = props;
    const { activeIndex, getItemProps, closeMenu } = useContext(SelectContext);
    const { ref, index } = useListItem();

    const isActive = activeIndex === index;

    if (!getItemProps) {
        return null;
    }

    return (
        <button
            ref={ref}
            role="option"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            style={{
                background: isActive ? 'cyan' : '',
                // fontWeight: isSelected ? 'bold' : '',
            }}
            {...getItemProps({
                onClick: () => {
                    closeMenu();
                    onClick();
                },
            })}
        >
            {label}
        </button>
    );
}
