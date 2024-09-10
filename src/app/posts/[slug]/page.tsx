import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIRECTORY = path.join(process.cwd(), '_posts'); // Adjust to your posts directory

const getContentAfterFrontMatter = (filePath: string) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const sections = fileContent.split('---');
    const mainContent = sections[2].trim(); 
    return mainContent;
};

const getPostBySlug = (slug: string) => {
    const files = fs.readdirSync(POSTS_DIRECTORY);
    const matchingFile = files.find((file) => file.replace(/\.md?$/, '') === slug); // Adjust the extension if necessary

    if (!matchingFile) {
      return null;
    }

    const filePath = path.join(POSTS_DIRECTORY, matchingFile);
    const content = fs.readFileSync(filePath, 'utf-8');

    return { content, filename: matchingFile };
};

const getDetails = (value: { content: string; filename: string; } | null) => {
    try{
        const {data} = matter(value!.content)
        return data || null
    } catch (error){
        return null;
    }
}
  

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const post = getPostBySlug(slug);
  const content = getContentAfterFrontMatter(POSTS_DIRECTORY + '\\' + post!.filename);
  const details = getDetails(post)

  return (
    <div className='mt-32'>
      <h1>{details!.title}</h1>
      <h2>{details!.date}</h2>
      <p>{content}</p> 
    </div>
  );
};

export default BlogPost;
