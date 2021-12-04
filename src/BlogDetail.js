import { useParams } from "react-router";
import NotFound404 from "./NotFound404";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const {id} = useParams();
    const {data: blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    return (
        <div className="blog-detail">
            { isLoading && <div className="loading">Loading...</div> }
            { blog && <h1>{blog.title}</h1> }
            <hr/>
            { blog && <p className="body">{blog.body}</p> }
            { error && <NotFound404/>}
        </div>
        
     );
}
 
export default BlogDetail;