import { Blog } from '@/entities/blog.entity';
import { getBlogs } from '../firestore/blog';
import { BlogElement } from '../components/blog/blog-element';

export default async function Bal() {
    const blogs = await getBlogs();
    return (
        <div>
            {blogs.map((blog: Blog) => (
                <BlogElement key={blog.id} blog={blog} />
            ))}
        </div>
    );
}
