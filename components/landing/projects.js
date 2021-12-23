import Image from 'next/image';

const ProjectItem = (props) => {
  const { link, description, title, conver, technology } = props;

  return (
    <section className="flex w-full mb-4">
      <div className="hidden md:block shadow border border-gray-400 hover:border-gray-600 w-4/5 h-72 rounded-lg overflow-hidden relative">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            alt={title}
            src="https://mahmad-me.vercel.app/assets/images/projects/peterpitch.png"
            className="block absolute h-full inset-0 object-cover xl:object-top rounded-lg opacity-60 hover:opacity-95"
          />
        </a>
      </div>

      <div className="lg:w-2/4 z-10 py-3 my-auto rounded-lg lg:-ml-12 xl:-ml-24">
        <div>
          <a 
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-right"
          >
            <h1
              className="mt-2 mr-4 mb-2 lg:mb-2 text-md lg:text-2xl font-extrabold leading-snug tracking-tight lg:leading-14"
            >
              {title}
            </h1>
          </a>
          <div className="w-full">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-right text-sm leading-snug dark:text-cool-gray-400">
                {description}
              </p>

              <ul className="flex text-sm font-semibold mt-4 justify-end">
                {technology.map((tech, index) => (
                  <li className="ml-3" key={index}>{tech}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
};

export default ProjectItem;