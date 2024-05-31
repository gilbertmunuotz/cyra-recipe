import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from './Spinner'

function MenuDetails() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        async function fetchRecipe() {
            setIsLoading(true);

            const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data) {
                    setRecipe(data);
                    console.log(data);
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
        };

        fetchRecipe();
    }, [API_KEY, id]);


    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : recipe ? (
                <div>
                    <img src={recipe.image} alt={recipe.title} />
                    <p className='text-center text-xl font-bold'>{recipe.title}</p>
                    <h1>{recipe.cuisines}</h1>
                    <h2>Ingredients:</h2>
                    <ul>
                        {recipe.extendedIngredients.map(ingredient => (
                            <li key={ingredient.id}>
                                {ingredient.original} ({ingredient.amount} {ingredient.unit})
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Recipe Not Found</p>
            )}
        </div>
    )
}

export default MenuDetails