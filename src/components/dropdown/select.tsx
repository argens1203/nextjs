import React, { useState, useRef, useCallback, useMemo } from 'react';
import { SelectContext } from './select-context';
import {
    FloatingFocusManager,
    FloatingList,
    useFloating,
    autoUpdate,
    flip,
    useListNavigation,
    useTypeahead,
    useClick,
    useDismiss,
    useRole,
    useInteractions,
} from '@floating-ui/react';
import { ReactElement } from 'react-markdown/lib/react-markdown';

type Props = { children: ReactElement };

export function Select(props: Props) {
    const { children } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<null | number>(null);
    const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
    const [selectedLabel, setSelectedLabel] = useState<null | number>(null);

    const { refs, floatingStyles, context } = useFloating({
        placement: 'bottom-start',
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [flip()],
    });

    const elementsRef = useRef([]);
    const labelsRef = useRef([]);

    const handleSelect = useCallback((index: number | null) => {
        setSelectedIndex(index);
        setIsOpen(false);
        if (index !== null) {
            setSelectedLabel(labelsRef.current[index]);
        }
    }, []);

    function handleTypeaheadMatch(index: number) {
        if (isOpen) {
            setActiveIndex(index);
        } else {
            handleSelect(index);
        }
    }

    const listNav = useListNavigation(context, {
        listRef: elementsRef,
        activeIndex,
        selectedIndex,
        onNavigate: setActiveIndex,
    });
    const typeahead = useTypeahead(context, {
        listRef: labelsRef,
        activeIndex,
        selectedIndex,
        onMatch: handleTypeaheadMatch,
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: 'listbox' });

    const { getReferenceProps, getFloatingProps, getItemProps } =
        useInteractions([listNav, typeahead, click, dismiss, role]);

    const selectContext = useMemo(
        () => ({
            activeIndex,
            selectedIndex,
            getItemProps,
            handleSelect,
        }),
        [activeIndex, selectedIndex, getItemProps, handleSelect]
    );

    return (
        <>
            <div ref={refs.setReference} tabIndex={0} {...getReferenceProps()}>
                {selectedLabel ?? 'Select...'}
            </div>
            <SelectContext.Provider value={selectContext}>
                {isOpen && (
                    <FloatingFocusManager context={context} modal={false}>
                        <div
                            ref={refs.setFloating}
                            style={floatingStyles}
                            {...getFloatingProps()}
                        >
                            <FloatingList
                                elementsRef={elementsRef}
                                labelsRef={labelsRef}
                            >
                                {children}
                            </FloatingList>
                        </div>
                    </FloatingFocusManager>
                )}
            </SelectContext.Provider>
        </>
    );
}
