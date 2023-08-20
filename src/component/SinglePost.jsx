import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../redux/services/postSlice";


const SinglePost = () => {

    const { id } = useParams();
    const { isError, isLoading, data: post, error } = useGetPostByIdQuery(id);

    return (
        <div>
            {
                isError && <h2 className='text-center text-red-500'>{error?.error}</h2>
            }
            {
                isLoading && <h2 className='text-center'>Loading...</h2>
            }
            {
                post && <div className='flex justify-around flex-col mx-auto max-w-md my-10 bg-sky-100 rounded-md p-2'>
                    <h2>User Id: {post.userId}</h2>
                    <h2 className='text-xl mb-2'><span className='font-semibold'>Titile:</span> {post.title}</h2>
                    <p className="mb-2">
                        {post.body}
                    </p>
                </div>
            }
        </div>
    );
};

export default SinglePost;