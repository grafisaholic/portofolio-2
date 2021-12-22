import Layout from '../components/layout';
import PostItem from '../components/landing/PostItems';

const title = 'Blogs ✍️'
const description = "I love building new things. This blog is a way for me to write down and share new ideas and lessons with everyone."

const Blogs = () => {
  return (
    <Layout title={title} description={description}>
      <div className="md:space-y-3 divide-y font-mono p-3">
        <div className="pb-4 space-y-2 space-y-3">
          <h1 className="text-3xl tracking-tight font-semibold dark:text-cool-gray-100">{title}</h1>
          <p className="font-mono dark:text-cool-gray-400">{description}</p>
        </div>
        
        <div></div>
        <div className="grid grid-cols-1 border-none">
          <PostItem 
            title="Create professional portfolio website with Nextjs and ChakraUI" 
            description="Currently, I'm learning Nextjs and Typescript. And for learning perspective my portofolio I decided to rebuilt my..." 
            slug=""
            date="June, 29 2021"
          />
          <PostItem 
            title="Create professional portfolio website with Nextjs and ChakraUI" 
            description="Currently, I'm learning Nextjs and Typescript. And for learning perspective my portofolio I decided to rebuilt my..." 
            slug=""
            date="June, 29 2021"
          />
          <PostItem 
            title="Create professional portfolio website with Nextjs and ChakraUI" 
            description="Currently, I'm learning Nextjs and Typescript. And for learning perspective my portofolio I decided to rebuilt my..." 
            slug=""
            date="June, 29 2021"
          />
          <PostItem 
            title="Create professional portfolio website with Nextjs and ChakraUI" 
            description="Currently, I'm learning Nextjs and Typescript. And for learning perspective my portofolio I decided to rebuilt my..." 
            slug=""
            date="June, 29 2021"
          />
        </div>
      </div>
    </Layout>
  )
};

export default Blogs;