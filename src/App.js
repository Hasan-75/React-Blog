import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreateBlog from './CreateBlog';
import BlogDetail from './BlogDetail';
import NotFound404 from './NotFound404';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/create" element = {<CreateBlog/>}/>
            <Route path = "/blogs/:id" element = {<BlogDetail/>}/>
            <Route path = "*" element = {<NotFound404/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
