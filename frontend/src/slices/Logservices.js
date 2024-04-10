const url = 'http://localhost:4000/api/send/login';

// login users Here
const login = async (userData) => {
    try {
        const response = await fetch(url, {
            method: 'POST', // Specify POST method for login
            headers: { 'Content-Type': 'application/json' }, // Set content type to JSON
            body: JSON.stringify(userData), // Convert user data to JSON for request body
        });

        if (!response.ok) { // Check for successful response status code (200s)
            throw new Error(`Login failed with status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response

        // Handle successful Login (e.g., store user data, navigate to success page)
        return data;

    } catch (error) {
        // Handle potential errors during login (e.g., display error message)
        console.error('Login error:', error); // Log the error for now
        throw error; // Re-throw the error for potential handling in calling code
    }
};

const authService = { login };
export default authService;
