import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Cover from '../img/cover.jpg';
import avt from '../img/avt.jpg';
import { getNumFollows, getUserInfo } from '../api/UserRequest';
import { PostResponse, Userinfo } from '../pb/apiservice';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

const ProfileCard = () => {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState<Userinfo>();
    const [numFollower, setNumFollower] = useState<string>();
    const [numFollowing, setNumFollowing] = useState<string>();
    const posts = useSelector((state: any) => state.postReducer.posts);
    const { id } = router.query;
    const user = useSelector((state: any) => state.authReducer.authData);
    const { loading } = useSelector((state: any) => state.authReducer);

    useEffect(() => {
        if (router.isReady) {
            getUserInfo(Number(id))
                .then((res) => {
                    setUserInfo(res);
                })
                .catch(() => router.push('/notfound'));
            getNumFollows(Number(id))
                .then((res) => {
                    setNumFollower(res.numberFollower);
                    setNumFollowing(res.numberFollowing);
                })
                .catch((error) => console.log(error));
        }
    }, [id, router, user]);

    return (
        <div className='relative flex flex-col w-full overflow-auto profileCard bg-card-color rounded-3xl'>
            <div className='relative flex flex-col items-center profileImg'>
                <div className='w-full h-full'>
                    {loading ? (
                        <Skeleton height={'50%'} width='100%' />
                    ) : (
                        <Image
                            width={'100%'}
                            height='50%'
                            layout='responsive'
                            src={userInfo?.coverImg ? userInfo.coverImg : Cover}
                            className='object-cover'
                            priority
                            alt='cover'
                        />
                    )}
                </div>
                <div className='relative w-28 top-[-3rem]'>
                    {loading ? (
                        <Skeleton circle width={'100%'} height='100%' />
                    ) : (
                        <Image
                            width='100%'
                            height={'100%'}
                            layout='responsive'
                            src={userInfo?.avatar ? userInfo.avatar : avt}
                            alt='profile'
                            priority
                            className='object-cover rounded-full '
                        />
                    )}
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 profileName'>
                <span className='font-bold '>{`${userInfo?.firstName} ${userInfo?.lastName}`}</span>
                <span>{userInfo?.desc}</span>
            </div>

            <div className='flex flex-col items-center justify-center gap-3 followStatus'>
                <hr className='w-[85%] border-hr-color' />
                <div className='flex gap-4 h-full w-[80%] justify-around items-center'>
                    <div className='flex flex-col items-center justify-center gap-2 follow'>
                        <span className='font-bold'>{numFollowing}</span>
                        <span className='text-xs text-primary-gray'>
                            Following
                        </span>
                    </div>
                    <div className='h-12 border-l-2 vl border-hr-color'></div>
                    <div className='flex flex-col items-center justify-center gap-2 follow'>
                        <span className='font-bold'>{numFollower}</span>
                        <span className='text-xs text-primary-gray'>
                            Followers
                        </span>
                    </div>

                    <div className='h-12 border-l-2 vl border-hr-color'></div>
                    <div className='flex flex-col items-center justify-center gap-2 follow'>
                        <span className='font-bold'>
                            {
                                posts.filter(
                                    (post: PostResponse) =>
                                        post.userId === Number(id)
                                ).length
                            }
                        </span>
                        <span className='text-xs text-primary-gray'>Posts</span>
                    </div>
                </div>
                <hr className='w-[85%] border-hr-color mb-3' />
            </div>
        </div>
    );
};

export default ProfileCard;
