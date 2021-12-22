import Layout from '../components/layout';
import PostListItem from '../components/landing/popularPostItem';

const title = "Hey, I'm Khabibur Rokhman";
const description = "I'm Senior Software Engineer"

export default function Home() {
  return (
    <Layout title={title} description={description}>
      <div className="space-y-20 font-mono p-3">
        
        {/* INTRO */}
        <div className="">
          <div>
            <h1 className="md:text-4xl lg:text-4xl text-2xl font-mono md:mb-6 font-medium leading-tight tracking-tight dark:text-gray-100 sm:leading-10 md:leading-14">
              Hey, I'm Khabibur Rokhman 👋
            </h1>
          </div>

          <p className="lg:text-lg md:text-lg text-sm font-mono mt-3 mb-6 md:mb-8 dark:text-cool-gray-400">
            I'm a Full Stack Developer based on Rembang.
          </p>
          <p className="lg:text-lg md:text-lg text-sm font-mono mt-3 md:mb-8 dark:text-cool-gray-400">
            This is my digital garden, where I write about the things I'm working on and share what I've learned.
          </p>
        </div>

        {/* POPULAR POST */}
        <section>
          <div className="text-left mb-4">
            <h1 className="lg:text-3xl text-2xl dark:text-gray-100 font-medium leading-tight">Popular Articles</h1>
          </div>

          <div className="flex flex-col">
            <PostListItem 
              title="Create professional portfolio website with Nextjs and ChakraUI" 
              description="Currently, I'm learning Nextjs and Typescript. And for learning perspective my portofolio I decided to rebuilt my..." 
              slug=""
              date="June, 29 2021"  
            />
            <PostListItem 
              title="Create professional portfolio website with Nextjs and ChakraUI" 
              description="Currently, I'm learning Nextjs and Typescript. And for learning perspective my portofolio I decided to rebuilt my..." 
              slug=""
              date="June, 29 2021"  
            /> 
          </div>
        </section>
      </div>
    </Layout>
  )
}
