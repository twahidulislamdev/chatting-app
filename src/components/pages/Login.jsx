import React from 'react';
import Container from '../Container';
import { FaGoogle, FaApple } from 'react-icons/fa';
import LoginPage from '../../assets/loginPage.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center py-5">
      {/* Container with fixed width */}
      <Container className="w-[1280px]">
        <div className="flex justify-between gap-5 p-10 bg-gray-800/80 rounded-lg">
          {/* Image Section */}
          <div className="w-[60%] h-[600px]">
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg "
              src={LoginPage}
              alt="Login illustration"
            />
          </div>

          {/* Form Section */}
          <div className="w-[40%] h-[600px]  backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-white text-center mb-6">
              Welcome Back
            </h3>

            <form className="space-y-5">
              {/* Name Input */}


              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full bg-gray-700/50 border border-gray-600 text-white text-base rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors placeholder-gray-400"
                  placeholder="name@gmail.com"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-200"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 w-full bg-gray-700/50 border border-gray-600 text-white text-base rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors placeholder-gray-400"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Checkbox + Forgot Password */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-500 border-gray-600 rounded bg-gray-700 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-200"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold text-lg py-2 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Log In
              </button>
            </form>

            {/* Create Account */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-300">
                No account yet?{' '}
                <Link to={"/signup"}>
                  <span
                    className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                  >
                    Creat Account
                  </span>
                </Link>
              </p>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <hr className="border-gray-600" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 px-2 text-sm text-gray-400">
                Or
              </span>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700/50 border border-gray-600 text-white py-2 rounded-md hover:bg-gray-600 transition-colors">
                <FaGoogle className="text-xl" />
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700/50 border border-gray-600 text-white py-2 rounded-md hover:bg-gray-600 transition-colors">
                <FaApple className="text-xl" />
                <span className="text-sm font-medium">Apple</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
