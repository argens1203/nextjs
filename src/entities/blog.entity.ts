import { DateTime } from 'luxon';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore/lite';

export class Blog {
    constructor(input: Partial<Blog> = {}) {
        return Object.assign(this, input);
    }

    id: string = '';
    title: string = '';
    content: string = '';
    createdAt: DateTime = DateTime.now();
    lastUpdatedAt: DateTime = DateTime.now();

    toDocData(): DocumentData {
        return { title: this.title, content: this.content };
    }

    static fromSnapshot(snapshot: QueryDocumentSnapshot): Blog {
        const id = snapshot.id;
        const data = snapshot.data();
        const content =
            typeof data.content === 'string'
                ? data.content
                : data.content.join('\n');
        return new Blog({
            title: data.title,
            content,
            createdAt: DateTime.fromJSDate(data.createdAt.toDate()),
            lastUpdatedAt: DateTime.fromJSDate(data.lastUpdatedAt.toDate()),
            id,
        });
    }

    toSerializable() {
        const { id, title, content, createdAt, lastUpdatedAt } = this;
        return {
            id,
            title,
            content,
            createdAt: createdAt.toJSDate(),
            lastUpdatedAt: lastUpdatedAt.toJSDate(),
        };
    }
}
