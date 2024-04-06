import React, { useState } from 'react';

function MenuList() {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searched, setSearched] = useState(false); // State to track if search has been performed

    const handleForm = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };

    const API_KEY = process.env.REACT_APP_API_KEY || 'c7341c6dae4c4e00b4434cea23cb522c'

    const fetchData = async () => {

        const url = `https://api.spoonacular.com/food/menuItems/search?query=${searchTerm}&apiKey=${API_KEY}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.menuItems) {
                setRecipes(data.menuItems);
                setSearched(true); // Set searched to true after fetching data
            } else {
                console.error('Invalid data format:', data);
            }
        } catch (error) {
            console.error('Error Fetching Data', error);
        }
    };


    return (
        <div className='MenuList'>
            <div className="bg-white my-4 sm:my-8">
                <div className="text">
                    <h1 className='text-black text-3xl font-semibold text-left ml-6 sm:text-center italic'>Menu List</h1>
                </div>

                <form className='flex justify-between items-center mx-auto w-full border p-1 rounded-lg text-white bg-black max-w-[700px]'>
                    <div className="rounded-lg">
                        <input type="text" className="bg-transparent focus:outline-none" placeholder="Type Something Here" value={searchTerm} onChange={handleForm} />
                    </div>
                    <div className="p-2">
                        <button type="button" onClick={fetchData} className='bg-orange-500 py-2 px-2 rounded-md'>Search</button>
                    </div>
                </form>

                {searched && ( // Render recipes only if search has been performed
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-8 mt-10 cursor-pointer">
                        {recipes.map(recipe => (
                            <div key={recipe.id} className='bg-orange-400'>
                                {recipe.image && (
                                    <img src={recipe.image} alt={recipe.title} className='bg-cover h-64 w-full' />
                                )}
                                <p className='text-center text-xl'>{recipe.title}</p>
                                <p className='text-center'> Restaurant Name:{recipe.restaurantChain}</p>
                                <p className='text-left mx-2'>{recipe.servings.number} servings of {recipe.servings.size} {recipe.servings.unit}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MenuList;
