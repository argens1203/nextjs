import { Blog } from '@/entities/blog.entity';
import { getBlogs } from '../firestore/blog';
import { BlogElement } from './blog-element';
import { UpdateButton } from './update-button';

export default async function Bal() {
    const blogs = await getBlogs();
    return (
        <div>
            <UpdateButton />
            {blogs.map((blog: Blog) => (
                <BlogElement key={blog.id} blog={blog} />
            ))}
        </div>
    );
}
