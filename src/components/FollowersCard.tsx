import Image from 'next/image';
import { Followers } from '../data/FollowersData';

const FollowersCard = () => {
    return (
        <div className='flex flex-col w-3/4 gap-4 text-base followerCard rounded-xl'>
            <h3 className='font-bold'>Followers</h3>
            {Followers.map((follow, index) => (
                <div
                    key={index}
                    className='flex items-center justify-between follower'
                >
                    <div className='flex gap-3'>
                        <div className='img'>
                            <Image
                                height={50}
                                width={50}
                                src={follow.img}
                                className='object-cover rounded-full followerImg'
                                alt='avt'
                            />
                        </div>
                        <div className='flex flex-col justify-center name'>
                            <span className='font-bold'>{follow.name}</span>
                            <span>{follow.username}</span>
                        </div>
                    </div>
                    <button className='w-20 rounded-lg h-9 button'>
                        Follow
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FollowersCard;
