import Footer from "./Footer";
import Spinner from './Spinner'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MenuDetails() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        async function fetchRecipe() {
            setIsLoading(true);

            const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data) {
                    setRecipe(data);
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
        }

        fetchRecipe();
    }, [API_KEY, id]);


    return (
        <div>
            {isLoading ? (
                <Spinner loading={isLoading} />
            ) : recipe.length === 0 ? (
                <p className="text-center">Recipe Not Found</p>
            ) : (
                <div className="flex flex-col">

                    <img src={recipe.image} alt={recipe.title} className="h-[50vh] w-full object-cover cursor-pointer" />

                    <div className="px-4 py-8">
                        <div className="uppercase font-semibold">
                            Dish Type: {recipe.dishTypes}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <p className="text-center text-3xl font-bold sm:col-span-2">{recipe.title}</p>

                            <div className="alpha">
                                <h2 className="font-bold text-xl">Ingredients</h2>
                                <ul className="sm:grid sm:grid-cols-1 gap-2">
                                    {recipe.extendedIngredients.map((ingredient, index) => (
                                        <li key={index} className="sm:col-span-1">
                                            {index + 1}. {ingredient.original} ({ingredient.amount} {ingredient.unit})
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="beta">
                                <h2 className="font-bold text-xl">Procedures</h2>
                                <ul>
                                    {recipe.analyzedInstructions[0].steps.map((step) => (
                                        <li key={step.number}> {step.step}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mx-6 sm:col-span-2 flex justify-between items-center mt-4">
                                <p>Number Of Servings: {recipe.servings}</p>
                                <p>Average Time: {recipe.readyInMinutes} Minutes</p>
                            </div>

                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}
export default MenuDetails;