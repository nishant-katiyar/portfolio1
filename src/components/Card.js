import React from 'react';
import profile from '../images/main-image.png';
import { FaGithub, FaLinkedin, FaTwitter, FaHackerrank, FaEnvelope } from 'react-icons/fa';

function Card() {
    return (
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-xs mx-auto bg-stone-900 shadow-xl rounded-xl p-5'>
                <div className="">
                    <img className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt='profile face' />
                </div>

                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl text-white">
                        Nishant Katiyar
                    </p>

                    <p className="text-xs sm:text-base text-white pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                        Front End Developer || Software Developer
                    </p>

                    <div className="flex align-center justify-center mt-4">
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
                </div>
            </div>
        </div>
    );
}

export default Card;
