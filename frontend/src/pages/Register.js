import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormHookYup, userSchema } from "../userschema/UserSchema";

function Register() {

    const { register, handleSubmit, formState: { errors } } = FormHookYup(userSchema);

    const [UserName, setUserName] = useState('');

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className='Register'>
            <div className="bg-orange-500 min-h-screen flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md mx-4">
                    <h1 className="text-center text-5xl font-serif">Registration Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="username text-center mt-4">
                            <label className="block text-xl font-medium leading-6 text-gray-900 mb-2">Username</label>
                            <div className="flex justify-center">
                                <div className="rounded-md shadow-sm sm:max-w-md">
                                    <input
                                        type="text"
                                        id="UserName"
                                        value={UserName}
                                        {...register("UserName")}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Enter Username Here...."
                                        className="block bg-transparent py-1 pl-1 px-16 border sm:text-sm sm:leading-6"
                                    />
                                    <p className="text-red-600 text-sm">{errors.UserName?.message}</p>
                                </div>
                            </div>
                        </div>


                        <div className="email text-center mt-4">
                            <label className="block text-xl font-medium leading-6 text-gray-900 mb-2">Email</label>
                            <div className="flex justify-center">
                                <div className="rounded-md shadow-sm sm:max-w-md">
                                    <input
                                        type="email"
                                        {...register("email")}
                                        id="email"
                                        placeholder="Enter Email Here...."
                                        className="block bg-transparent py-1 pl-1 px-16 border sm:text-sm sm:leading-6"
                                    />
                                    <p className="text-red-600 text-sm">{errors.email?.message}</p>
                                </div>
                            </div>
                        </div>


                        <div className="password text-center mt-4">
                            <label className="block text-xl font-medium leading-6 text-gray-900 mb-2">Password</label>
                            <div className="flex justify-center">
                                <div className="rounded-md shadow-sm sm:max-w-md">
                                    <input
                                        type="password"
                                        {...register("password")}
                                        id="password"
                                        placeholder="Password Here...."
                                        className="block bg-transparent py-1 pl-1 px-16 border sm:text-sm sm:leading-6"
                                    />
                                    <p className="text-red-600 text-sm">{errors.password?.message}</p>
                                </div>
                            </div>
                        </div>


                        <div className="confirm_password text-center mt-4">
                            <label className="block text-xl font-medium leading-6 text-gray-900 mb-2">Confirm Password</label>
                            <div className="flex justify-center">
                                <div className="rounded-md shadow-sm sm:max-w-md">
                                    <input
                                        type="password"
                                        {...register("confirmPassword")}
                                        id="confirmPassword"
                                        placeholder="Confirm Password Here...."
                                        className="block bg-transparent py-1 pl-1 px-16 border sm:text-sm sm:leading-6"
                                    />
                                    <p className="text-red-600 text-sm">{errors.confirmPassword?.message}</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex items-center justify-center mt-8 space-x-8">
                            <Link to={"/login"}>
                                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline" type="submit">
                                    Log In
                                </button>
                            </Link>

                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline" type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default Register