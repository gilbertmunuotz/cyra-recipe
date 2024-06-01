import { Link } from "react-router-dom";
import NoImage from "../Images/NotFound.jpg";

function NotFound() {
    return (
        <div>
            <div className="h-[100vh] overflow-hidden">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="image">
                        <img src={NoImage} alt="Notfound page" className="object-contain w-full h-full" />
                    </div>
                    <div className="grid place-items-center text-black text-2xl">
                        <h1>
                            Page Doesnot Exist.
                            <br />
                            <Link to={"/"}>
                                <button type="button" className="bg-sky-300 py-2 rounded-md px-2">Go Back Home</button>
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;