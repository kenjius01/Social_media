import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getNumFollows } from '../api/UserRequest';
import Cover from '../img/cover.jpg';
import avt from '../img/avt.jpg';
import { useRouter } from 'next/router';

const CardIntro = () => {
    const user = useSelector((state: any) => state.authReducer.authData);
    const [numFollower, setNumFollower] = useState<string>();
    const [numFollowing, setNumFollowing] = useState<string>();
    const router = useRouter();
    useEffect(() => {
        getNumFollows(Number(user?.id))
            .then((res) => {
                setNumFollower(res.numberFollower);
                setNumFollowing(res.numberFollowing);
            })
            .catch((error) => console.log(error));
    }, [user?.id]);

    return (
        <div className='relative flex flex-col w-full overflow-auto profileCard bg-card-color rounded-3xl'>
            <div className='relative flex flex-col items-center profileImg'>
                <div className='w-full h-full'>
                    <Image
                        width={'100%'}
                        height='50%'
                        layout='responsive'
                        src={user?.coverImg ? user.coverImg : Cover}
                        className='object-cover'
                        priority
                        alt='cover'
                    />
                </div>
                <div className='relative w-28 top-[-3rem]'>
                    <Image
                        width='100%'
                        height={'100%'}
                        layout='responsive'
                        src={user?.avatar ? user?.avatar : avt}
                        alt='profile'
                        priority
                        className='rounded-full '
                    />
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 profileName'>
                <span className='font-bold '>{`${user?.firstName} ${user?.lastName}`}</span>
                <span>{user?.desc}</span>
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
                </div>
                <hr className='w-[85%] border-hr-color mb-3' />
            </div>
            <span
                onClick={() => router.push(`/profile/${user.id}`)}
                className='self-center mb-4 font-bold text-orange-400 cursor-pointer'
            >
                My Profile
            </span>
        </div>
    );
};

export default CardIntro;
