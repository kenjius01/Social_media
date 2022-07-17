import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTimelinePosts } from '../../actions/PostAction';
import { PostResponse } from '../../pb/apiservice';
import Post from './Post';

const Posts = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.authReducer.authData);
    let { posts, loading } = useSelector((state: any) => state.postReducer);
    const [userId, setUserId] = useState(user.id);
    const router = useRouter();
    if (router.query.id) {
        posts = posts.filter(
            (post: PostResponse) => post.userId === Number(router.query.id)
        );
    }
    useEffect(() => {
        if (router.query.id) {
            setUserId(router.query.id);
        }
    }, [router.query.id]);
    useEffect(() => {
        dispatch(getTimelinePosts(userId) as any);
    }, [dispatch, userId]);
    return (
        <div className='flex flex-col h-screen gap-4 overflow-x-hidden overflow-y-auto posts'>
            {loading
                ? 'Fetching Posts....'
                : posts?.map((post: any, id: number) => (
                      <Post key={id} post={post} />
                  ))}
        </div>
    );
};

export default Posts;
