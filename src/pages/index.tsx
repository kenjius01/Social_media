import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllFollowers } from '../api/UserRequest';
import PostSide from '../components/PostSide/PostSide';
import ProfileSide from '../components/ProfileSide';
import RightSide from '../components/RightSide/RightSide';
import { FollowerInfo } from '../pb/apiservice';

const Home: NextPage = () => {
    const router = useRouter();
    const user = useSelector((state: any) => state.authReducer.authData);
    const [followers, setFollowers] = useState<FollowerInfo[]>([]);
    useEffect(() => {
        if (!user) {
            router.push('/signin');
        }
    }, [router, user]);
    useEffect(() => {
        getAllFollowers(user.id).then((res) => setFollowers(res));
    }, [user.id]);
    return (
        <div className="main">
            <Head>
                <title>KT Social</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="app overflow-hidden text-primary-black bg-[#f3f3f3] pt-4 ">
                <div className="blur-3xl absolute w-80 h-56 bg-[#a6ddf0] rounded-[50%] top-[-18%] right-0"></div>
                <div className="blur-3xl absolute w-80 h-56 bg-[#a6ddf0] rounded-[50%] top-[36%] left-[8rem]"></div>
                <div className="relative grid-cols-[25%_45%_30%] grid gap-4 Home">
                    <ProfileSide followers={followers} />
                    <PostSide />
                    <RightSide />
                </div>
            </main>
        </div>
    );
};

export default Home;
