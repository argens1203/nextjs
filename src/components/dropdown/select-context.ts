import { createContext } from 'react';
import { useInteractions } from '@floating-ui/react';

type SelectContextValue = {
    activeIndex: number | null;
    selectedIndex: number | null;
    getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
    handleSelect: (index: number | null) => void;
};

export const SelectContext = createContext<SelectContextValue>(
    {} as SelectContextValue
);
