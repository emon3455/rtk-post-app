import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Posts from "../component/Posts";
import SinglePost from "../component/SinglePost";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
            {
                path: "/",
                element: <Posts/>
            },
            {
                path: "/posts/:id",
                element: <SinglePost/>
            }
        ]
    },
]);

export default router;