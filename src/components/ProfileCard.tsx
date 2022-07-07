import Image from 'next/image';
import React from 'react';
import Cover from '../img/cover.jpg';
import Profile from '../img/profileImg.jpg';

const ProfileCard = () => {
    return (
        <div className='relative flex flex-col gap-4 profileCard overflow-clip bg-card-color rounded-3xl'>
            <div className='relative flex flex-col items-center justify-center profileImg'>
                <div className='w-full'>
                    <Image src={Cover} alt='cover' />
                </div>
                <div className='absolute top-12'>
                    <Image
                        width='96px'
                        height={96}
                        src={Profile}
                        alt='profile'
                        className='rounded-full '
                    />
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 mt-12 profileName'>
                <span className='font-bold '>Johana Laveret</span>
                <span>Web developer</span>
            </div>

            <div className='flex flex-col items-center justify-center gap-3 followStatus'>
                <hr className='w-[85%] border-hr-color' />
                <div className='flex gap-4 w-[80%] justify-around items-center'>
                    <div className='follow'>
                        <span className='flex flex-col items-center justify-center gap-2 font-bold'>
                            9,929
                        </span>
                        <span className='text-xs text-primary-gray'>
                            Following
                        </span>
                    </div>
                    <div className='vl h-[120%] border-l-2 border-hr-color'></div>
                    <div className='flex flex-col items-center justify-center gap-2 follow'>
                        <span className='font-bold'>1</span>
                        <span className='text-xs text-primary-gray'>
                            Followers
                        </span>
                    </div>
                </div>
                <hr className='w-[85%] border-hr-color mb-3' />
            </div>
            <span className='self-center mb-4 font-bold text-orange-400 cursor-pointer'>
                My Profile
            </span>
        </div>
    );
};

export default ProfileCard;
