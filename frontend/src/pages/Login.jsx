import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { FormHookYup, userSchema } from "../userschema/UserSchema";

function Form() {

    const { register, handleSubmit, formState: { errors } } = FormHookYup(userSchema)

    const [UserName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const onSubmit = async () => {
        const userData = { UserName, password }

        const url = 'http://localhost:4000/api/send/login';

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(userData),
            });

            if (response.ok) {

                // Display success toast
                toast('Login Successful!');

                // Clear form fields (optional)
                userNameRef.current.value = '';
                passwordRef.current.value = '';

                console.log("Server Response:", response);
                // You can potentially redirect to a different page here
                // after successful login (e.g., using useNavigate from react-router-dom)
            } else {
                let errorMessage = 'An error occurred. Please try again later.';
                // Check if the response contains JSON error message
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch (error) {
                    toast('Error parsing error response:', error);
                }
                console.log("Error Occurred", errorMessage);
                toast(errorMessage); // Display error toast
                return; // Exit if not successful
            }
        } catch (error) {
            console.error('Error sending data:', error);
            toast('An error occurred. Please try again later.'); // Display error toast
        }

    };

    return (
        <div className="bg-orange-500 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md mx-4">
                <h1 className="text-center text-5xl font-serif">Log in Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="username text-center mt-4">
                        <div className="flex justify-center">
                            <div className="rounded-md shadow-sm sm:max-w-md">
                                <input
                                    type="text"
                                    id="UserName"
                                    value={UserName}
                                    ref={userNameRef}
                                    {...register("UserName")}
                                    placeholder="Username Here...."
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="block bg-transparent py-1 pl-1 px-16 border sm:text-sm sm:leading-6"
                                />
                                <p className="text-red-600 text-sm">{errors.UserName?.message}</p>
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
                                    {...register("password")}
                                    placeholder="Password Here...."
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block bg-transparent py-1 pl-1 px-16 border sm:text-sm sm:leading-6"
                                />
                                <p className="text-red-600 text-sm">{errors.password?.message}</p>
                            </div>
                        </div>
                    </div>

                    <div className="buttons flex items-center justify-center mt-8 space-x-8">
                        <Link to={"/login"}>
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline" type="submit">
                                Log In
                            </button>
                        </Link>

                        <Link to={"/register"}>
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline" type="submit">
                                Register
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default Form;