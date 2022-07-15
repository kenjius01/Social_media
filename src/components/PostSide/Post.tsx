import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { VscLiveShare } from 'react-icons/vsc';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';

const Post = ({
    post,
}: {
    post: {
        img: StaticImageData;
        name: string;
        desc: string;
        likes: number;
        liked: boolean;
    };
}) => {
    return (
        <div className='flex flex-col gap-4 p-4 post bg-card-color rounded-2xl'>
            <div className='relative w-full h-full max-h-[80rem] postImg'>
                <Image
                    width={'100%'}
                    height='70%'
                    layout='responsive'
                    src={post.img}
                    alt=''
                    className='object-cover rounded-2xl'
                />
            </div>
            <div className='flex items-center gap-6 postReact '>
                {post.liked ? (
                    <BsHeartFill className='w-8 h-8 cursor-pointer' color='orange' />
                ) : (
                    <AiOutlineHeart className='cursor-pointer w-9 h-9' />
                )}
                <FaRegCommentAlt className='cursor-pointer w-7 h-7' />
                <VscLiveShare className='w-8 h-8 cursor-pointer' />
            </div>
            <span className='text-xs text-primary-gray'>{post.likes} likes</span>
            <div className='detail'>
                <span>
                    <b>{post.name}</b>
                </span>
                <span> {post.desc}</span>
            </div>
        </div>
    );
};

export default Post;
