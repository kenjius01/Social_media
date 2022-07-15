import React, { useState } from 'react';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import ShareModal from '../Modal/ShareModal';
import { TrendCard } from './TrendCard';

const RightSide = () => {
    const [opened, setOpened] = useState(false)
    return (
        <div className='flex flex-col items-center gap-8 rightSide'>
            <div className='flex items-center justify-center gap-16 mt-4 navIcon'>
                <AiFillHome color='orange' className='cursor-pointer w-9 h-9' />
                <BsMessenger color='orange' className='w-8 h-8 cursor-pointer' />
                <FaBell color='orange' className='w-8 h-8 cursor-pointer' />
                <AiFillSetting color='orange' className='cursor-pointer w-9 h-9' />
            </div>
            <TrendCard/>
            <button onClick={() => setOpened(true)} className="self-center w-2/3 h-12 rounded-3xl button">
              Share
            </button>
            <ShareModal opened={opened} setOpened={setOpened}/>
        </div>
    );
};

export default RightSide;
