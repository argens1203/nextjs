import { ReactElement } from 'react';
import { DateTime } from 'luxon';

export class Blog {
    id: string = '';
    title: string = '';
    content: ReactElement[] = [];
    createdAt: DateTime = DateTime.now();
    lastUpdatedAt: DateTime = DateTime.now();
}
