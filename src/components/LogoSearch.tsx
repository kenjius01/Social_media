import Image from 'next/image';
import React from 'react';
import Logo from '../img/logo.png';
import { BsSearch } from 'react-icons/bs';

const LogoSearch = () => {
    return (
        <div className='flex gap-3'>
            <div className='w-10 h-10'>
                <Image width={100} height={100} src={Logo} alt='logo' />
            </div>
            <div className='flex rounded-lg search bg-input-color'>
                <input
                    type='text'
                    placeholder='#Explore'
                    className='p-2 bg-transparent border-none outline-none'
                />
                <div className='flex items-center justify-center p-3 text-white rounded-md cursor-pointer s-icon bg-amber-500'>
                    <BsSearch />
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;
