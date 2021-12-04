import { Link } from "react-router-dom";

const NotFound404 = () => {
    return ( 
        <div className="not-found">
            <h1>404 Not Found</h1>
            <h2>Sorry, the page you're looking for is not available.</h2>
            <h3><Link to="/">Back to Homepage</Link></h3>
        </div>
     );
}
 
export default NotFound404;