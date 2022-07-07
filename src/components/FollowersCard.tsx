import Image from 'next/image';
import { Followers } from '../data/FollowersData';

const FollowersCard = () => {
    return (
        <div className='flex flex-col w-full gap-4 text-base followerCard rounded-xl'>
            <h3 className='font-bold'>Who is following you?</h3>
            {Followers.map((follow, index) => (
                <div
                    key={index}
                    className='flex items-center justify-between follower'
                >
                    <div className='flex gap-3'>
                        <Image
                            height={50}
                            width={50}
                            src={follow.img}
                            className='object-cover rounded-full followerImg'
                            alt='avt'
                        />
                        <div className='flex flex-col justify-center name'>
                            <span className='font-bold'>{follow.name}</span>
                            <span>{follow.username}</span>
                        </div>
                    </div>
                    <button className='px-5 h-9 button'>Follow</button>
                </div>
            ))}
        </div>
    );
};

export default FollowersCard;
