import { createContext } from 'react';
import { useInteractions } from '@floating-ui/react';

type SelectContextValue = {
    activeIndex: number | null;
    getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
    closeMenu: () => void;
};

export const SelectContext = createContext<SelectContextValue>(
    {} as SelectContextValue
);
