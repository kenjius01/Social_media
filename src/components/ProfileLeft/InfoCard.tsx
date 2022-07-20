import { useRouter } from 'next/router';
import { userInfo } from 'os';
import React, { useEffect, useState } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../actions/AuthAction';
import { getUserInfo } from '../../api/UserRequest';
import { Userinfo } from '../../pb/apiservice';
import ProfileModal from '../Modal/ProfileModal';

const InfoCard = () => {
    const [opened, setOpened] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.authReducer.loading);
    const user = useSelector((state: any) => state.authReducer.authData);
    const [profileUser, setProfileUser] = useState<Userinfo>(user);
    const router = useRouter();
    const { id } = router.query;
    const [isYourInfo, setIsYourInfo] = useState(false);
    useEffect(() => {
        if (router.isReady) {
            if (user?.id == id) {
                setIsYourInfo(true);
                setProfileUser(user);
            } else {
                setIsYourInfo(false);
                getUserInfo(Number(id)).then((res) => setProfileUser(res));
            }
        }
    }, [id, router.isReady, user]);
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
                <ProfileModal
                    userInfo={profileUser}
                    setOpened={setOpened}
                    opened={opened}
                />
            </div>
            <div className='info '>
                <span>
                    <b>Status </b>
                </span>
                <span>{profileUser?.relationship}</span>
            </div>
            <div className='info '>
                <span>
                    <b>Lives in </b>
                </span>
                <span>{profileUser?.address}</span>
            </div>
            <div className='info '>
                <span>
                    <b>Work at </b>
                </span>
                <span>{profileUser?.workAt}</span>
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
