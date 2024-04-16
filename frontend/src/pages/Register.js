import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import { FormHookYup, userSchema } from "../userschema/UserSchema";

function Register() {

    // React Hook Form Handling & Yup Validation
    const { register, handleSubmit, formState: { errors } } = FormHookYup(userSchema);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Refrence User Input Values
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const onSubmit = async () => {
        const url = 'http://localhost:4000/api/send/register';

        const userData = { username, email, password };

        console.log("Form Data:", userData)
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(userData),
            });


            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error Occurred:', errorText);
                toast('An error occurred. Please try again later.'); // Display generic error toast
                return; // Exit if not successful
            }

            // Display success toast if Data Passed Succesfully
            toast.success('Registration Successful!');

            // Clear form fields (optional)
            usernameRef.current.value = '';
            emailRef.current.value = '';
            passwordRef.current.value = '';

            console.log("Server Response:", response);
        } catch (error) {
            console.error('Error sending data:', error);
            toast('An error occurred. Please try again later.'); // Display error toast
        }
    };


    return (
        <div className='Register'>
            <div className="bg-orange-500 min-h-screen flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md mx-4">
                    <h1 className="text-center text-5xl font-serif">Registration Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="username text-center mt-4">
                            <div className="flex justify-center">
                                <div className="rounded-md shadow-sm sm:max-w-md">
                                    <input
                                        type="text"
                                        id="username"
                                        name={username}
                                        ref={usernameRef}
                                        {...register("username", { required: true })}
                                        placeholder="Enter Username Here...."
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="block bg-transparent py-1 pl-1 px-16 border sm:text-sm sm:leading-6"
                                    />
                                    <p className="text-red-600 text-sm">{errors.username?.message}</p>
                                </div>
                            </div>
                        </div>


                        <div className="email text-center mt-4">
                            <div className="flex justify-center">
                                <div className="rounded-md shadow-sm sm:max-w-md">
                                    <input
                                        type="email"
                                        id="email"
                                        name={email}
                                        ref={emailRef}
                                        {...register("email", { required: true })}
                                        placeholder="Enter Email Here...."
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block bg-transparent py-1 pl-1 px-16 border sm:text-sm sm:leading-6"
                                    />
                                    <p className="text-red-600 text-sm">{errors.email?.message}</p>
                                </div>
                            </div>
                        </div>


                        <div className="password text-center mt-4">
                            <div className="flex justify-center">
                                <div className="rounded-md shadow-sm sm:max-w-md">
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        ref={passwordRef}
                                        {...register("password", { required: true })}
                                        placeholder="Password Here...."
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block bg-transparent py-1 pl-1 px-16 border sm:text-sm sm:leading-6"
                                    />
                                    <p className="text-red-600 text-sm">{errors.password?.message}</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex items-center justify-center mt-8 space-x-8">
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline" type="submit">
                                Register
                            </button>
                            <Link to={'/login'}>
                                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline" type="submit">
                                    Log In
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default Register