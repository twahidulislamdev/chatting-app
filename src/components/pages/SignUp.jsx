import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Container from "../Container";
import LoginPage from "../../assets/loginPage.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Input Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler
  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      toast.error("Please fill all fields!");
    }
    else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
          // Signed up 
          toast.success("Account Created successfully")
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage)
          
          // ..
        });

    }


  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center py-5">
        <Container className="w-[1280px]">
          <div className="flex justify-between gap-5 p-10 bg-gray-800/80 rounded-lg shadow-lg">
            {/* Image Section */}
            <div className="w-[60%] h-[600px]">
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg"
                src={LoginPage}
                alt="Sign Up"
              />
            </div>

            {/* Form Section */}
            <div className="w-[40%] h-[600px] backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-white text-center mb-6">
                Create Account
              </h3>

              <form onSubmit={handleSignUpSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Name
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 w-full bg-gray-700/50 border border-gray-600 text-white text-base rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 w-full bg-gray-700/50 border border-gray-600 text-white text-base rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
                    placeholder="name@gmail.com"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Password
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 w-full bg-gray-700/50 border border-gray-600 text-white text-base rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
                    placeholder="••••••••"
                  />
                </div>

                {/* Remember + Forgot */}
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

                  <button
                    type="button"
                    className="text-sm text-indigo-400 hover:text-indigo-300"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-semibold text-lg py-2 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:cursor-pointer"
                >
                  Sign Up
                </button>
              </form>

              {/* Already have account */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-300">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="text-indigo-400 hover:text-indigo-300 font-medium">
                      Login
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
