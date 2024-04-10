const url = 'http://localhost:4000/api/send/register';

// register users Here
const register = async (userData) => {
    try {
        const response = await fetch(url, {
            method: 'POST', // Specify POST method for register
            headers: { 'Content-Type': 'application/json' }, // Set content type to JSON
            body: JSON.stringify(userData), // Convert user data to JSON for request body
        });

        if (!response.ok) { // Check for successful response status code (200s)
            throw new Error(`Register failed with status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response

        // Handle successful register (e.g., store user data, navigate to success page)
        return data;

    } catch (error) {
        // Handle potential errors during register (e.g., display error message)
        console.error('Register error:', error); // Log the error for now
        throw error; // Re-throw the error for potential handling in calling code
    }
};

const authService = { register };
export default authService;
