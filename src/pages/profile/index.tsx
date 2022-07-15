import React from 'react';
import PostSide from '../../components/PostSide/PostSide';
import ProfileCard from '../../components/ProfileCard';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import RightSide from '../../components/RightSide/RightSide';

const index = () => {
    return (
        <main className='app overflow-hidden text-primary-black bg-[#f3f3f3] pt-4 '>
            <div className='blur-3xl absolute w-80 h-56 bg-[#a6ddf0] rounded-[50%] top-[-18%] right-0'></div>
            <div className='blur-3xl absolute w-80 h-56 bg-[#a6ddf0] rounded-[50%] top-[36%] left-[8rem]'></div>
            <div className='relative grid-cols-[25%_45%_30%] grid gap-4 profile'>
                <ProfileLeft />
                <div className='flex flex-col gap-4 profileCenter'>
                    <div className=' profile'>
                        <ProfileCard isProfilePage={true} />
                    </div>
                    <PostSide />
                </div>
                <RightSide/>
            </div>
        </main>
    );
};

export default index;
