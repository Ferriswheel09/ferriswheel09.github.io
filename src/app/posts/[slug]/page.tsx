import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';


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
  console.log(details)

  return (
    <div className='mt-32 text-white'>
      <div className='sm:ml-4 items-center shadow-2xl shadow-zinc-500 sm:flex sm:flex-row'>
        <div className='flex-1 pl-2'>
          <h1 className='text-6xl font-bold mb-2'>{details!.title}</h1>
          <h2 className='text-3xl'>{details!.date}</h2>
        </div>
        <div className="flex justify-center">
          <img
            src={details!.coverImage}
            alt="Not loaded"
            className="sm:max-w-xs object-center"
          />
        </div>
      </div>

      <ReactMarkdown 
        className='my-20 text-white'
        components={{
          h1: ({node, ...props}) => (
            <h1 className="text-center text-3xl font-bold" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-left text-base m-6 text-xl leading-relaxed" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown> 
    </div>
  );
};

export default BlogPost;
