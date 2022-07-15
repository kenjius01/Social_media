import React, { useState } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import ProfileModal from '../Modal/ProfileModal';

const InfoCard = () => {
    const [opened, setOpened] = useState(false);

    return (
        <div className='flex flex-col w-4/5 gap-4 p-8 infoCard bg-card-color rounded-2xl '>
            <div className='flex items-center justify-between mb-4 infoHead'>
                <h4 className='text-xl font-bold'>Your Info</h4>
                <BsFillPencilFill
                    color='orange'
                    className='w-8 h-6 cursor-pointer'
                    onClick={() => setOpened(true)}
                />
                <ProfileModal setOpened={setOpened} opened={opened}/>
            </div>
            <div className='info '>
                <span>
                    <b>Status </b>
                </span>
                <span>in Relationship</span>
            </div>
            <div className='info '>
                <span>
                    <b>Lives in </b>
                </span>
                <span>Ha Nam</span>
            </div>
            <div className='info '>
                <span>
                    <b>Work at </b>
                </span>
                <span>Showcase</span>
            </div>
            <button className='self-end h-10 rounded-xl w-28 button'>
                Logout
            </button>
        </div>
    );
};

export default InfoCard;
