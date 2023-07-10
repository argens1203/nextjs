import { getBlog } from '@/firestore/blog';
import { BlogPageBody } from './body';

type Props = {
    params: { id: string };
};

export default async function BlogPage(props: Props) {
    const blog = await getBlog(props.params.id);
    return <div>{blog && <BlogPageBody blog={blog.toSerializable()} />}</div>;
}
