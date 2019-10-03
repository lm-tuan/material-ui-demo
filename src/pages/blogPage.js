import React from 'react';
import Dashboard from './../components/Dashboard';
import Blogs from './../components/Dashboard/blog';

export const BlogPage = () => {
    return (
        <div>
            <Dashboard component = {<Blogs/>}/>
        </div>
    )
}

export default BlogPage;