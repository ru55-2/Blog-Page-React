import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([{title: "lorem ipsum", body: "more lorem ipsum...", author:"Russell", id:1}, {title: "lorem ipsum", body: "more lorem ipsum...", author:"James", id:1}]);



useEffect(() => {
    console.log(blogs);
},[]);


return(
    <div className="Home">
    <BlogList blogs={blogs} title="All Blogs!"/>
    </div>
);
}

export default Home