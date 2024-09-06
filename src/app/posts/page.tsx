import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

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

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className='bg-inherit w-full h-screen'>
      {posts.length > 0 ? (
        <ul className='pt-10 grid grid-cols-2 gap-4'>
          {posts.map((post, index) => (
              <li className='bg-post-card transition mx-auto h-72 w-fit max-w-xl border-4 p- hover:shadow-xl hover:-translate-y-1 hover:scale-110 hover:cursor-pointer' key={index}>
                <img 
                  src={post.coverImage} 
                  alt='Not loaded'
                  className='w-full max-h-40'
                />
                <h1 className='text-2xl pl-1 pt-2 font-gothic'>{post.title}</h1>
                <p className='font-abel pl-1 text-lg text-wrap'>{post.excerpt}</p>
              </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
