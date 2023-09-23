import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-10">
            <h2 className="text-5xl mb-4">Oops!!!</h2>
            <NavLink to="/"><button className="btn btn-secondary">Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;