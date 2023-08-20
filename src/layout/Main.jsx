import { Link, Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>

            <ul className="flex justify-around p-2 bg-sky-200">
                <Link to="/">Home</Link>
                <Link to="/addPost">Add Posts</Link>
                <Link to="/managePost">Manage Posts</Link>
            </ul>

            <Outlet/>

        </div>
    );
};

export default Main;