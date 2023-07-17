'use client';

import { ChangeEventHandler, useContext } from 'react';
import { BlogContext } from './blog-context-provider';

type Props = {
    id: string;
};

export function BlogCheckbox(props: Props) {
    const { id } = props;
    const { addId, removeId } = useContext(BlogContext);
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            addId(id);
        } else {
            removeId(id);
        }
        console.log(id);
    };
    return <input type="checkbox" onChange={onChange} />;
}
