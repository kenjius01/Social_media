import Image from 'next/image';
import { Followers } from '../data/FollowersData';
import { FollowerInfo } from '../pb/apiservice';
import avt from '../img/avt.jpg';
import { useSelector } from 'react-redux';
import { FollowUser, getAllFollowing, UnFollow } from '../api/UserRequest';
import { useEffect, useState } from 'react';

const FollowersCard = ({ followers }: { followers: FollowerInfo[] }) => {
    const user = useSelector((state: any) => state.authReducer.authData);
    const [followings, setFollowings] = useState<Number[]>([]);

    useEffect(() => {
        getAllFollowing(Number(user?.id)).then((res) => {
            setFollowings(res);
        });
    }, [user?.id]);

    const handleFollow = (id: number, userId: number) => {
        if (followings.includes(Number(id))) {
            UnFollow(id, userId)
                .then(() => {
                    getAllFollowing(Number(user?.id)).then((res) => {
                        setFollowings(res);
                    });
                })
                .catch((err) => console.log(err));
        } else {
            FollowUser(id, userId).then(() => {
                getAllFollowing(Number(user?.id)).then((res) => {
                    setFollowings(res);
                });
            });
        }
    };
    return (
        <div className="flex flex-col w-3/4 gap-4 text-base followerCard rounded-xl">
            <h3 className="font-bold">Followers</h3>
            {followers?.map((follow: FollowerInfo) => (
                <div
                    key={follow.id}
                    className="flex items-center justify-between follower"
                >
                    <div className="flex gap-3">
                        <div className="img">
                            <Image
                                height={50}
                                width={50}
                                src={follow.avatar ? follow.avatar : avt}
                                className="object-cover rounded-full followerImg"
                                alt="avt"
                            />
                        </div>
                        <div className="flex flex-col justify-center name">
                            <span className="font-bold">{`${follow?.firstName} ${follow?.lastName}`}</span>
                            <span>{follow?.username}</span>
                        </div>
                    </div>
                    <button
                        onClick={() => handleFollow(follow.id, user?.id)}
                        className="w-20 px-8 rounded-lg h-9 button"
                    >
                        {followings.includes(Number(follow.id))
                            ? 'Unfollow'
                            : 'Follow'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FollowersCard;
