import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className='text-center space-y-2 mt-8'>
            <h1 className='text-5xl'>404 - Page Not Found</h1>
            <p className='text-xl'>The page you are looking for dose not exist.</p>
            <Link to="/"><button className='btn bg-purple-500'>Go Back Home</button></Link>
        </div>
    );
};

export default NotFoundPage;