import React, { useContext } from 'react';
import { SelectContext } from './select-context';
import { useListItem } from '@floating-ui/react';

type Props = { label: string };

export function Option(props: Props) {
    const { label } = props;
    const { activeIndex, selectedIndex, getItemProps, handleSelect } =
        useContext(SelectContext);

    const { ref, index } = useListItem({ label });

    const isActive = activeIndex === index;
    const isSelected = selectedIndex === index;

    return (
        <button
            ref={ref}
            role="option"
            aria-selected={isActive && isSelected}
            tabIndex={isActive ? 0 : -1}
            style={{
                background: isActive ? 'cyan' : '',
                fontWeight: isSelected ? 'bold' : '',
            }}
            {...getItemProps({
                onClick: () => handleSelect(index),
            })}
        >
            {label}
        </button>
    );
}
