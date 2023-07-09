import { ReactElement } from 'react';
import { DateTime } from 'luxon';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore/lite';

export class Blog {
    constructor(input: Partial<Blog> = {}) {
        return { ...this, ...input };
    }
    id: string = '';
    title: string = '';
    content: ReactElement[] = [];
    createdAt: DateTime = DateTime.now();
    lastUpdatedAt: DateTime = DateTime.now();

    toDocData(): DocumentData {
        return { title: this.title, content: this.content };
    }

    static fromSnapshot(snapshot: QueryDocumentSnapshot): Blog {
        const id = snapshot.id;
        const data = snapshot.data()!;
        return new Blog({
            title: data.title,
            content: data.content,
            createdAt: DateTime.fromJSDate(data.createdAt.toDate()),
            lastUpdatedAt: DateTime.fromJSDate(data.lastUpdatedAt.toDate()),
            id,
        });
    }
}
