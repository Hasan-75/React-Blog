import { Link } from "react-router-dom";

const BlogList = ({blogs, handleLikeBlog}) => {
    return (
        <div className="blog-list">
            {blogs.map(
                (blog) => (
                    <div className="blog-item" key={blog.id}>
                        <Link to={`blogs/${blog.id}`}>
                            <div className="title">{blog.title}</div>
                            <div className="body">{blog.body}</div>
                            <div className="like-section">
                                <button onClick={()=>handleLikeBlog(blog.id)}>Like</button>
                                <p>{blog.likes} people liked</p>
                            </div>
                        </Link>
                    </div>
                )
            )}
        </div>
    );
}
 
export default BlogList;