import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PostSkeleton = () => {
    return (
        <div className='flex flex-col gap-4 p-4 post bg-card-color rounded-2xl'>
            <div className='flex items-center gap-2 userImg'>
                <Skeleton circle width={40} height={40} />
                <div className='flex flex-col detail'>
                    <Skeleton width={80}/>
                    <Skeleton width={50}/>
                </div>
            </div>
            <div className='status'>
                <Skeleton width={'80%'}/>
            </div>

            <div className='relative w-full h-full max-h-[80rem] postImg'>
                <Skeleton width={'100%'} height={450} />
            </div>

            <div className='flex postReact '>
                <Skeleton width={300} height={40}/>
            </div>
            <Skeleton width={40}/>
        </div>
    );
};

export default PostSkeleton;
