'use client';

import { useCallback } from 'react';

import { deleteBlog } from '@/firestore/blog';
import { Option } from '../dropdown/option';
import { Select } from '../dropdown/select';

type Props = { id: string };

export function MenuButton(props: Props) {
    const { id } = props;
    const onDelete = useCallback(() => {
        deleteBlog(id);
    }, [id]);
    return (
        <div>
            <Select>
                <Option label={'delete'} onClick={onDelete} />
            </Select>
        </div>
    );
}
