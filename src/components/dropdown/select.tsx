'use client';

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

import './dropdown.css';
import { ThreeDot } from '../icon/three-dot';

type Props = { children: ReactElement };

export function Select(props: Props) {
    const { children } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const { refs, floatingStyles, context } = useFloating({
        placement: 'bottom-start',
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [flip()],
    });

    const elementsRef = useRef([]);
    const labelsRef = useRef([]);

    const listNav = useListNavigation(context, {
        listRef: elementsRef,
        activeIndex,
        onNavigate: setActiveIndex,
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: 'listbox' });

    const { getReferenceProps, getFloatingProps, getItemProps } =
        useInteractions([listNav, click, dismiss, role]);

    const selectContext = useMemo(
        () => ({
            activeIndex,
            getItemProps,
            closeMenu: () => setIsOpen(false),
        }),
        [activeIndex, getItemProps, setIsOpen]
    );

    return (
        <>
            <div
                ref={refs.setReference}
                tabIndex={0}
                {...getReferenceProps()}
                style={{ alignItems: 'center' }}
            >
                <ThreeDot />
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
