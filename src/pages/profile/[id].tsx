import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Posts from '../../components/PostSide/Posts';
import PostShare from '../../components/PostSide/PostShare';
import ProfileCard from '../../components/ProfileCard';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import RightSide from '../../components/RightSide/RightSide';

const ProfilePage = () => {
    const router = useRouter();
    const user = useSelector((state: any) => state.authReducer.authData);
    const { id } = router.query;
    const [isYourPage, setIsYourPage] = useState(true);
    useEffect(() => {
        if (!user) {
            router.push('/signin');
        }
        if (user.id != id) {
            setIsYourPage(false);
        }
    }, [id, router, user]);
    return (
        <main className='app overflow-hidden text-primary-black bg-[#f3f3f3] pt-4 '>
            <div className='blur-3xl absolute w-80 h-56 bg-[#a6ddf0] rounded-[50%] top-[-18%] right-0'></div>
            <div className='blur-3xl absolute w-80 h-56 bg-[#a6ddf0] rounded-[50%] top-[36%] left-[8rem]'></div>
            <div className='relative grid-cols-[25%_45%_30%] grid gap-4 profile'>
                <ProfileLeft />
                <div className='flex flex-col gap-4 profileCenter'>
                    <div className=' profile'>
                        <ProfileCard/>
                    </div>
                    <div className='flex flex-col min-h-screen gap-4 overflow-auto postSide'>
                        {isYourPage && <PostShare />}
                        <Posts />
                    </div>
                </div>
                <RightSide />
            </div>
        </main>
    );
};

export default ProfilePage;
