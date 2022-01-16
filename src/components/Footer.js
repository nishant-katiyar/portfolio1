import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaHackerrank, FaEnvelope } from 'react-icons/fa';

function Footer()
{
    return (
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-4">
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href='https://github.com/nishant-katiyar'>
                    <FaGithub />
                    <span className="sr-only">
                        Github
                    </span>
                </a>

                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-900 hover:bg-blue-900 rounded-full hover:text-white transition-colors duration-300" href='https://www.linkedin.com/in/nishant-katiyar-907782165/'>
                    <FaLinkedin />
                    <span className="sr-only">
                        Linkedin
                    </span>
                </a>

                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-700 hover:bg-green-700 rounded-full hover:text-white transition-colors duration-300" href='https://www.hackerrank.com/inishantkatiyar'>
                    <FaHackerrank />
                    <span className="sr-only">
                        Hackerrank
                    </span>
                </a>

                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300" href='mailto:inishantkatiyar@gmail.com'>
                    <FaEnvelope />
                    <span className="sr-only">
                        EMail
                    </span>
                </a>

                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href='https://mobile.twitter.com/inishantkatiyar/'>
                    <FaTwitter />
                    <span className="sr-only">
                        Twitter
                    </span>
                </a>
            </div>

            <div className="flex justify-center mt-4">
                <p className='text-white mb-4'>
                    Made with <span className="mr-2" role="link" aria-label='heart'>❤️</span>by <a className="text-blue-500 hover:underline" href="inishantkatiyar@gmail.com">Nishant Katiyar</a>
                </p>
            </div>

        </div>
    )
}

export default Footer;
