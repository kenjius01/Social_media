import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../actions/AuthAction';
import Logo from '../../img/logo.png';

const LoginPage = () => {
    const router = useRouter();
    const user = useSelector((state: any) => state.authReducer.authData);

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [router, user]);
    const dispatch = useDispatch();

    const loading = useSelector((state: any) => state.authReducer.loading);
    const error = useSelector((state: any) => state.authReducer.error);

    const [data, setData] = useState<{
        username?: string;
        password?: string;
    }>();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(logIn(data) as any);

        // console.log(object);
    };
    return (
        <div className='relative bg-[#f3f3f3] flex items-center justify-center h-screen gap-16 Auth'>
            <div className='flex items-center justify-center gap-8 a-left'>
                <Image
                    width={64}
                    height='64'
                    src={Logo}
                    alt='logo'
                    className=''
                />
                <div className='Webname'>
                    <h1 className='text-5xl text-transparent font-bold bg-[length:100%] bg-repeat bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'>
                        KT Media
                    </h1>
                    <h6 className='mt-4 text-sm font-bold'>
                        Explore the ideas througout the world
                    </h6>
                </div>
            </div>
            <div className='a-right'>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col items-center justify-center gap-8 px-20 py-4 bg-card-color infoForm authForm rounded-2xl'
                >
                    <h3 className='text-3xl font-bold text-primary-orange'>
                        Login
                    </h3>

                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            placeholder='Username'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            name='username'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='password'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                        />
                    </div>
                    {error && (
                        <span className='self-end text-xs text-red-500'>
                            Username or password is incorrect!
                        </span>
                    )}

                    <div className='flex w-full h-8 gap-4'>
                        <span className='flex items-center gap-2 text-sm'>
                            Don`t have account?{' '}
                            <Link href={'/signup'}>
                                <a className='text-base font-bold text-primary-orange'>
                                    Signup
                                </a>
                            </Link>
                        </span>
                    </div>
                    <button
                        className='self-end w-24 h-10 rounded-md button infoButton'
                        type='submit'
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
