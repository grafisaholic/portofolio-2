import Link from 'next/link'

const PostItem = ({ title, description, slug, date }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="p-3 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-cool-gray-700 hover:shadow-md">
        <div className="flex justify-between">
          <time className="text-gray-500 text-sm">{date}</time>
        </div>

        <div className="flex justify-between">
          <h3 className="mb-1 text-xl font-semibold tra cking-normals">{title}</h3>
        </div>

        <div className="text-sm text-gray-700 dark:text-cool-gray-400 font-normal mt-1.5">
          {description}
        </div>
      </div>
    </Link>
  )
};

export default PostItem;