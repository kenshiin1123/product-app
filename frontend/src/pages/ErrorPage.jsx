import { useRouteError } from "react-router-dom";
import Navbar from '../components/Navbar'
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center flex-col border-4 border-red-600 rounded p-4 w-1/2 mx-auto mt-5 gap-4 text-center text-3xl" id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    );
}