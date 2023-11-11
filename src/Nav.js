import { useState } from 'react';


const Navbar = () => {
    return(
        <div className='navbar'>
            <h1>Blog Page</h1>
            <div>
                <a href='/'>Home</a>
                <a href='/About'>About</a>
                <a href='/New Blog'>New Blog</a>
            </div>
        </div>
)}


export default Navbar