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

            <div className="text-center bg-gray-200 p-2 ">
                RTK Query || Copyright owner Emon
            </div>

        </div>
    );
};

export default Main;