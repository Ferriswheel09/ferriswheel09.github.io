import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import BlogCard from '@/components/blogCard';



async function getPosts() {
  const postsDirectory = path.join(process.cwd(), '_posts'); 
  try {
    const dir = await fs.opendir(postsDirectory);
    const posts = [];

    //Reading the data of each file to generate a card for it
    for await (const dirent of dir) {
      const filePath = path.join(postsDirectory, dirent.name)
      const fileContents = await fs.readFile(filePath, 'utf8');
      const {data, content} = matter(fileContents);

      //Push all of the data to an array to generate a card
      posts.push({
        slug: dirent.name.slice(0, -3), // filename without .md
        title: data.title || 'Untitled',
        date: data.date || 'No date',
        excerpt: data.excerpt || content.slice(0, 100), // fallback to a slice of content
        coverImage: data.coverImage || '/default.jpg', // default image if not provided
      });
    }

    posts.sort((a:any, b:any) => new Date(b.date) - new Date(a.date));
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function Posts() {
  const posts = await getPosts();

  //Fix the background to ensure consistency (have background be more static and moves with the page)
  return (
    <div className='relative min-h-screen inset-0 h-full w-full items-center px-5 pb-24 pt-36'>
      <h1 className='text-white text-center text-3xl'>Updates & Misc</h1>
      {posts.length > 0 ? (
        <ul className='py-10 max-h-full grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-20'>
          {posts.map((post, index) => (
            <li key={index}>
              <BlogCard post={post} index={index}/>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
