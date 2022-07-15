import React from 'react';
import Posts from './Posts';
import PostShare from './PostShare';

const PostSide = () => {
    return (
        <div
            className='flex flex-col min-h-screen gap-4 overflow-auto postSide'
        >
            <PostShare/>
            <Posts/>
        </div>
    );
};

export default PostSide;
