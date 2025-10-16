import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import ChattingAppLogo from "../../assets/chattingAppLogo.png";
import { Link } from 'react-router-dom';
import { FaGoogle, FaApple } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <div className='w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white border-b border-neutral-500'>
        <Container>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <img
                src={ChattingAppLogo}
                alt="Logo"
                className="w-9 h-9"
              />
              <span className="text-2xl font-bold">Chat <span className='text-indigo-400'>Bot</span></span>
            </div>

            {/* Navigation Links - Centered or adjusted spacing */}
            <ul className="flex space-x-8 text-base">
              <Link to={"/"}>
                <li className='text-gray-300 hover:text-white font-medium transition-colors cursor-pointer'>
                  Home
                </li>
              </Link>
              <Link to={"/dashboard"}>
                <li className='text-gray-300 hover:text-white font-medium transition-colors cursor-pointer'>
                  Dashboard
                </li>
              </Link>
              <Link to={"/signup"}>
                <li className='text-gray-300 hover:text-white font-medium transition-colors cursor-pointer'>
                  Sign Up
                </li>
              </Link>
              <Link to={"/login"}>
                <li className='text-gray-300 hover:text-white font-medium transition-colors cursor-pointer'>
                  Login
                </li>
              </Link>
            </ul>

            {/* Social Icons or Buttons Section - Matching Login's social style */}
            <div className="flex items-center gap-4">
              {/* Profile Image - Smaller and styled similarly */}
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;