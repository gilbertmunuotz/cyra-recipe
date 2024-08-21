import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div className='Navbar fixed top-0 w-full z-10'>
            <div className="flex justify-between items-center h-16 px-4 backdrop-blur-md">
                <Link to={'/'}>
                    <div className="text-3xl text-orange-500">Cyra Recipe</div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;