import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WindmillContext } from '@windmill/react-ui';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const { mode, toggleMode } = useContext(WindmillContext) 

  const navList = [
    { name : "Home", route: '/'},
    { name : "Blogs", route: '/blogs'},
    { name : "Projects", route: '/projects'},
  ];

  return (
    <header className="fixed top-0 w-full shadow-lg bg-white dark:text-gray-100 text-black dark:bg-gray-700 z-20">
      <nav>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div
                className="flex-shrink-0 cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <Link href='/' passHref>
                  <Image
                    className="w-10 inline rounded-full"
                    src="https://raw.githubusercontent.com/grafisaholic/grafisaholic.com/main/public/assets/avatar.png"
                    alt="Profile Icon"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex space-x-4 items-baseline">
                  {
                    navList.map(link => (
                      <Link href={link.route} key={link.name} passHref scroll={false}>
                        <a
                          className="px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900 rounded-md text-sm lg:text-base font-medium"
                        >
                          {link.name}
                        </a>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>

            <button
              className="hidden md:block text-2xl sm:text-3xl text-yellow-400 dark:text-yellow-300 focus:outline-none"
              onClick={() => toggleMode()}
            >
              {mode === "dark" ? "🌙" : "🌤"}
            </button>

            <div className="-mr-2 flex md:hidden space-x-4">
              <button
                className="block md:hidden text-2xl sm:text-3xl text-yellow-400 dark:text-yellow-300 focus:outline-none"
                onClick={() => toggleMode()}
              >
                {mode === "dark" ? "🌙" : "🌤"}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-200 dark:bg-gray-900 inline-flex items-center p-2 justify-center rounded-md"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        <Transition
          show={isOpen}
          enter="transition duration-300 ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100"
          leave="transition duration-300 ease-in-out duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="border-b md:hidden dark:border-gray-600">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navList.map(link => (
                <div aria-hidden="true" key={link.name}>
                  <Link href={link.route} scroll={false}>
                    <a className="hover:bg-gray-100 dark:hover:bg-gray-900 block px-3 py-1.5 rounded-md text-sm md:text-base font-medium">
                      {link.name}
                    </a>
                  </Link>{" "}
                </div>
              ))}
            </div>
          </div>
        </Transition>
      </nav>
    </header>
  )
};

export default Navbar;