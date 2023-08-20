import './App.css'
import { useGetAllPostsQuery } from './redux/services/postSlice'

function App() {

  const { isError, isLoading, data, error } = useGetAllPostsQuery();


  return (
    <>
      <h2 className='text-2xl font-semibold text-center'>All Post</h2>
      {
        isError && <h2 className='text-center text-red-500'>{error?.error}</h2>
      }
      {
        isLoading && <h2 className='text-center'>Loading...</h2>
      }
      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-2'>
        {
          data && data.map((post, indx) => <div key={indx} className='border bg-sky-100 p-4 rounded-md'>
            <h2 className='text-xl mb-2'><span className='font-semibold'>Titile:</span> {post.title}</h2>
            <p>
              {post.body}
            </p>
          </div>)
        }
      </section>
    </>
  )
}

export default App
