import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../img/logo.png';

const index = () => {
    return (
        <div className='relative flex items-center justify-center h-screen gap-16 Auth'>
            <div className='flex items-center justify-center gap-8 a-left'>
                <Image
                    width={64}
                    height='64'
                    src={Logo}
                    alt='logo'
                    className=''
                />
                <div className='Webname'>
                    <h1 className='text-5xl text-transparent font-bold bg-[length:100%] bg-repeat bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'>
                        KT Media
                    </h1>
                    <h6 className='mt-4 text-sm font-bold'>
                        Explore the ideas througout the world
                    </h6>
                </div>
            </div>
            <div className='a-right'>
                <form className='flex flex-col items-center justify-center gap-8 p-4 infoForm authForm bg-[#f3f3f3] rounded-2xl'>
                    <h3 className='text-3xl font-bold text-primary-orange'>Sign up</h3>

                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            placeholder='First Name'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            name='firstname'
                        />
                        <input
                            type='text'
                            placeholder='Last Name'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            name='lastname'
                        />
                    </div>

                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            name='username'
                            placeholder='Usernames'
                        />
                    </div>

                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            name='password'
                            placeholder='Password'
                        />
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            name='confirmpass'
                            placeholder='Confirm Password'
                        />
                    </div>

                    <div className='flex w-full h-8 gap-4'>
                        <span className='flex items-center gap-2 text-sm'>
                            Already have an account?  <Link href={'/signin'}><a className='text-base font-bold text-primary-orange'>Login</a></Link>
                        </span>
                    </div>
                    <button className='self-end w-24 h-10 rounded-md button infoButton' type='submit'>
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default index;
