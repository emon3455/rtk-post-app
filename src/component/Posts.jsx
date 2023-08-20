import { Link } from "react-router-dom";
import { useGetAllPostsQuery } from "../redux/services/postSlice";


const Posts = () => {

    const { isError, isLoading, data, error } = useGetAllPostsQuery();

    return (
        <div>
            <h2 className='text-2xl font-semibold text-center'>All Post</h2>
            {
                isError && <h2 className='text-center text-red-500'>{error?.error}</h2>
            }
            {
                isLoading && <h2 className='text-center'>Loading...</h2>
            }
            <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-2'>
                {
                    data && data.map((post, indx) => <div key={indx} className='flex justify-around flex-col bg-sky-100 rounded-md p-2'>
                        <h2 className='text-xl mb-2'><span className='font-semibold'>Titile:</span> {post.title}</h2>
                        <p className="mb-2">
                            {post.body.length > 100 && post.body.slice(0, 100) + "..."}
                        </p>
                        <div className="">
                            <Link to={`/posts/${post.id}`} className="px-2 py-1 bg-violet-500 text-white rounded-md">
                                View Details
                            </Link>
                        </div>
                    </div>)
                }
            </section>
        </div>
    );
};

export default Posts;