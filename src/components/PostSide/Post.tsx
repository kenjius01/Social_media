import Image from 'next/image';
import React, { useState } from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { VscLiveShare } from 'react-icons/vsc';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { likePost } from '../../api/PostRequest';
import { PostResponse } from '../../pb/apiservice';

const Post = ({ post }: { post: PostResponse }) => {
    const user = useSelector((state: any) => state.authReducer.authData);
    const [liked, setLiked] = useState(post?.likes?.includes(user?.id));
    const [likes, setLikes] = useState(post?.likes?.length);

    const handleLike = () => {
        setLiked((prev) => !prev);
        likePost(post.id, user.id);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
    };
    return (
        <div className='flex flex-col gap-4 p-4 post bg-card-color rounded-2xl'>
            <div className='detail'>
                <span>
                    <b>#{user.username}</b>
                </span>
                <span> {post.desc}</span>
            </div>
            {post.image && (
                <div className='relative w-full h-full max-h-[80rem] postImg'>
                    <Image
                        width={'100%'}
                        height='70%'
                        layout='responsive'
                        src={post?.image}
                        alt=''
                        priority
                        className='object-cover rounded-2xl'
                    />
                </div>
            )}
            <div className='flex items-center gap-6 postReact '>
                {liked ? (
                    <BsHeartFill
                        className='w-8 h-8 cursor-pointer'
                        color='orange'
                        onClick={handleLike}
                    />
                ) : (
                    <BsHeart
                        onClick={handleLike}
                        className='w-8 h-8 cursor-pointer'
                    />
                )}
                <FaRegCommentAlt className='cursor-pointer w-7 h-7' />
                <VscLiveShare className='w-8 h-8 cursor-pointer' />
            </div>
            <span className='text-xs text-primary-gray'>{likes} likes</span>
        </div>
    );
};

export default Post;
