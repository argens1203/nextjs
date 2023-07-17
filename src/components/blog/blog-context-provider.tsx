'use client';

import {
    ReactNode,
    createContext,
    useCallback,
    useMemo,
    useState,
} from 'react';

export const BlogContext = createContext<Context>({
    idsChosen: [],
    addId: () => {},
    removeId: () => {},
});

type Props = {
    children: ReactNode;
};
type Context = {
    idsChosen: string[];
    addId: (id: string) => void;
    removeId: (id: string) => void;
};
export function BlogProvider(props: Props) {
    const { children } = props;
    const [ids, setIds] = useState<string[]>([]);
    const addId = useCallback((id: string) => {
        setIds((ids) => {
            if (ids.includes(id)) {
                return ids;
            }
            return [...ids, id];
        });
    }, []);
    const removeId = useCallback((id: string) => {
        setIds((ids) => ids.filter((entry) => entry !== id));
    }, []);
    const context: Context = useMemo(
        () => ({ idsChosen: ids, addId, removeId }),
        [ids, addId]
    );
    return (
        <BlogContext.Provider value={context}>{children}</BlogContext.Provider>
    );
}
