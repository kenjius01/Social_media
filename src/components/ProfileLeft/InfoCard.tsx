import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../actions/AuthAction';
import ProfileModal from '../Modal/ProfileModal';

const InfoCard = () => {
    const [opened, setOpened] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.authReducer.loading);
    const user = useSelector((state: any) => state.authReducer.authData);
    const router = useRouter();
    const { id } = router.query;
    const [isYourInfo, setIsYourInfo] = useState(false);
    useEffect(() => {
        if (user.id == id) {
            setIsYourInfo(true);
        }
    }, [id, user.id]);
    const handleLogout = async () => {
        dispatch(logOut() as any);
        router.push('/signin');
    };
    return (
        <div className='flex flex-col w-4/5 gap-4 p-8 infoCard bg-card-color rounded-2xl '>
            <div className='flex items-center justify-between mb-4 infoHead'>
                <h4 className='text-xl font-bold'>Infomation</h4>
                {isYourInfo && (
                    <BsFillPencilFill
                        color='orange'
                        className='w-8 h-6 cursor-pointer'
                        onClick={() => setOpened(true)}
                    />
                )}
                <ProfileModal setOpened={setOpened} opened={opened} />
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
            {isYourInfo && (
                <button
                    onClick={handleLogout}
                    className='self-end h-10 rounded-xl w-28 button'
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Logout'}
                </button>
            )}
        </div>
    );
};

export default InfoCard;
