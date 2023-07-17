import { Blog } from '@/entities/blog.entity';
import { getBlogs } from '../firestore/blog';
import { BlogElement } from '../components/blog/blog-element';
import { BlogProvider } from '@/components/blog/blog-context-provider';
import { BlogHeader } from '@/components/blog/blog-header';

export default async function Bal() {
    const blogs = await getBlogs();
    return (
        <div>
            <BlogProvider>
                <BlogHeader />
                {blogs.map((blog: Blog) => (
                    <BlogElement key={blog.id} blog={blog} />
                ))}
            </BlogProvider>
        </div>
    );
}
