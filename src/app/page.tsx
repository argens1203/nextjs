import { Blog } from '@/entities/blog.entity';
import { getBlogs } from '../firestore/blog';
import { BlogElement } from './blog-element';

export default async function Bal() {
    const blogs = await getBlogs();
    return (
        <div>
            {blogs.map((blog: Blog, idx) => (
                <BlogElement key={idx} blog={blog} />
            ))}
        </div>
    );
}
