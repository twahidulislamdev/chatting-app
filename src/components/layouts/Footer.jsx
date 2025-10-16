import React from 'react'
import ChattingAppLogo from "../../assets/chattingAppLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-white  bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={ChattingAppLogo}
                alt="Logo"
                className="w-9 h-9"
              />
              <span className="text-2xl font-bold text-white">Chat <span className='text-indigo-400'>Bot</span></span>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              ChatBot™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>

    </>
  )
}

export default Footer