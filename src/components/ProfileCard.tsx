import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Cover from '../img/cover.jpg';
import Profile from '../img/profileImg.jpg';

const ProfileCard = ({isProfilePage}:{
    isProfilePage:boolean
}) => {

    const router = useRouter();

    return (
        <div className='relative flex flex-col w-full gap-4 overflow-auto profileCard bg-card-color rounded-3xl'>
            <div className='relative flex flex-col items-center profileImg'>
                <div className='w-full h-full'>
                    <Image
                        width={'100%'}
                        height='50%'
                        layout='responsive'
                        src={Cover}
                        className='object-cover'
                        alt='cover'
                    />
                </div>
                <div className='relative w-28 top-[-3rem]'>
                    <Image
                        width='100%'
                        height={'100%'}
                        layout='responsive'
                        src={Profile}
                        alt='profile'
                        className='rounded-full '
                    />
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 profileName'>
                <span className='font-bold '>Johana Laveret</span>
                <span>Web developer</span>
            </div>

            <div className='flex flex-col items-center justify-center gap-3 followStatus'>
                <hr className='w-[85%] border-hr-color' />
                <div className='flex gap-4 h-full w-[80%] justify-around items-center'>
                    <div className='flex flex-col items-center justify-center gap-2 follow'>
                        <span className='font-bold'>9,929</span>
                        <span className='text-xs text-primary-gray'>
                            Following
                        </span>
                    </div>
                    <div className='h-12 border-l-2 vl border-hr-color'></div>
                    <div className='flex flex-col items-center justify-center gap-2 follow'>
                        <span className='font-bold'>1</span>
                        <span className='text-xs text-primary-gray'>
                            Followers
                        </span>
                    </div>
                    {isProfilePage && (
                        <>
                            <div className='h-12 border-l-2 vl border-hr-color'></div>
                            <div className='flex flex-col items-center justify-center gap-2 follow'>
                                <span className='font-bold'>3</span>
                                <span className='text-xs text-primary-gray'>
                                    Posts
                                </span>
                            </div>
                        </>
                    )}
                </div>
                <hr className='w-[85%] border-hr-color mb-3' />
            </div>
            {isProfilePage ? (
                ''
            ) : (
                <span onClick={() => router.push('/profile')} className='self-center mb-4 font-bold text-orange-400 cursor-pointer'>
                    My Profile
                </span>
            )}
        </div>
    );
};

export default ProfileCard;
