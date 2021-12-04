import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");

    // const handleLikeBlog = (id) => {
    //     var updatedBlogs = blogs.map(
    //         blog => {
    //             if(blog.id === id)
    //                 blog.likes++;
    //             return blog;
    //             })
    //     setBlogs(updatedBlogs);
    // }

    return (
        <div className="home">
            <h1>This is a sample Home component</h1>
            { error && <div className="error">{error}</div> }
            { isLoading && <div className="loading">Loading...</div> }
            { blogs && <BlogList blogs = { blogs } handleLikeBlog = { ()=>{alert("Not implemented yet")} } /> }
        </div>
    );
}

export default Home