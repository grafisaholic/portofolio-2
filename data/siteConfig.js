import {
  FaGithub,
  FaGitlab,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Khabibur Rokhman. All Rights Reserved.`,
    author: 'Khabibur Rokhman',
    accounts: [
      {
        url: 'https://github.com/',
        label: 'Github Account',
        class: 'pl-5 text-sm lg:text-md text-cool-gray-500',
        icon: <FaGithub />
      },
      {
        url: 'https://gitlab.com/grafisaholic',
        label: 'Gitlab Account',
        class: 'pl-5 text-sm lg:text-md text-cool-gray-500',
        icon: <FaGitlab />
      },
      {
        url: 'https://twitter.com/khabibur__',
        label: 'Twitter Account',
        class: 'pl-5 text-sm lg:text-md text-cool-gray-500',
        icon: <FaTwitter />
      },
      {
        url: 'https://www.linkedin.com/in/khabibur06/',
        label: 'LinkedIn Account',
        class: 'pl-5 text-sm lg:text-md text-cool-gray-500',
        icon: <FaLinkedin />
      },
      {
        url: 'mailto:khabiburrokhman13@gmail.com',
        label: 'Email Account',
        class: 'pl-5 text-sm lg:text-md text-cool-gray-500',
        icon: <FiMail />
      }
    ]
}

export default siteConfig