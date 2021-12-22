import Link from 'next/link';

const postItemList = ({ title, description, slug, date }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="border border-gray-400 hover:border-gray-600 p-4 rounded-lg m-2 hover:shadow-md cursor-pointer">
        <div className="flex justify-between">
          <time className="text-gray-500 text-sm lg:text-sm">{date}</time>
        </div>

        <div className="flex justify-between">
          <h3 className="mb-1 text-sm lg:text-xl font-semibold tra cking-normals">{title}</h3>
        </div>

        <div className="text-xs lg:text-sm text-gray-700 dark:text-cool-gray-400 font-normal mt-1.5">
          {description}
        </div>
      </div>
    </Link>
  )
};

export default postItemList;