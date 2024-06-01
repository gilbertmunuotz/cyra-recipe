import Spinner from "./Spinner";
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function MenuList() {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const API_KEY = process.env.REACT_APP_API_KEY;

    async function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        setIsLoading(true);

        setTimeout(async () => {
            const url = `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${API_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data) {
                    setRecipes(data.results); // Assuming "results" is the array of recipes
                } else {
                    console.error('Invalid data format:', data);
                    toast.error('Invalid Input');
                }
            } catch (error) {
                console.error('Error Fetching Data', error);
                toast.error('Error Occurred');
            } finally {
                setIsLoading(false);
            }
        }, 1000);
    }

    return (
        <div className='MenuList'>
            <div className="bg-white my-4 sm:my-8">
                <div className="text">
                    <h1 className='text-black text-3xl font-semibold text-left ml-6 sm:text-center italic'>Recipe's List</h1>
                </div>

                <form className='flex mt-3 justify-between items-center mx-auto w-full border p-1 rounded-lg text-white bg-black max-w-[700px]' onSubmit={handleSubmit}>
                    <div className="rounded-lg">
                        <input
                            required
                            type="text"
                            value={searchTerm}
                            placeholder="Type Something Here..."
                            className="bg-transparent focus:outline-none ml-2"
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    </div>
                    <div className="p-2">
                        <button type="submit" className='bg-orange-500 py-2 px-2 rounded-md'>Search</button>
                    </div>
                </form>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-12 mt-10">
                    {isLoading ? (
                        <Spinner />
                    ) : recipes.length === 0 ? (
                        <div className="col-span-full">
                            <p className="text-left sm:text-center mt-3">No recipes found. Try a different search term.</p>
                        </div>) : (
                        recipes.map((recipe) => (
                            <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                                <div className="recipe-item">
                                    <img src={recipe.image} alt={recipe.title} />
                                    <p className='text-xl font-bold'>{recipe.title}</p>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default MenuList;