import { useState } from "react";
import {useNavigate} from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = {title, body, likes: 0};

        fetch("http://localhost:8000/blogs", {
            method: "Post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            setIsPending(false);
            navigate("/");
        });
    }

    return ( 
        <div className="create-blog">
            <h3>Create a new blog</h3>
            <form onSubmit = {handleSubmit}>
                <label>Blog Title:</label>
                <input type="text"
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    placeholder="Title of your Blog..."/>
                
                <label>Body:</label>
                <textarea
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                    placeholder="Write something..."></textarea>

                {
                    isPending?
                    <input type="submit" disabled value="Submitting..."/>
                    :
                    <input type="submit" value="Submit"/>
                }
            </form>
        </div>
     );
}
 
export default CreateBlog;