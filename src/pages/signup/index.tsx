import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../api/AuthRequest';
import Logo from '../../img/logo.png';

const SignUpPage = () => {
    const router = useRouter();

    const [error, setError] = useState('');
    const loading = useSelector((state: any) => state.authReducer.loading);
    const [data, setData] = useState<{
        username?: string;
        firstName?: string;
        lastName?: string;
        password?: string;
        confirmPass?: string;
    }>();
    const [confirmPass, setConfirmPass] = useState(true);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setConfirmPass(true);
        setError('');
        if (data?.password === data?.confirmPass) {
            signUp(data as FormData)
                .then(() => {
                    router.push('/signin');
                })
                .catch((err) => setError(err.response.data));
        } else {
            setConfirmPass(false);
        }
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
                    <h1 className='text-5xl font-akaya text-transparent font-bold bg-[length:100%] bg-repeat bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'>
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
                    className='flex flex-col items-center justify-center gap-8 p-8 bg-card-color infoForm authForm rounded-2xl'
                >
                    <h3 className='text-3xl font-bold text-primary-orange'>
                        Sign up
                    </h3>

                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            placeholder='First Name'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            name='firstName'
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            placeholder='Last Name'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            name='lastName'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            name='username'
                            placeholder='Usernames'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='password'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            name='password'
                            placeholder='Password'
                            onChange={handleChange}
                        />
                        <input
                            type='password'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            name='confirmPass'
                            placeholder='Confirm Password'
                            onChange={handleChange}
                        />
                    </div>

                    <span
                        className={
                            confirmPass
                                ? 'hidden'
                                : 'block self-end text-xs text-red-500'
                        }
                    >
                        * Confirm password is not match with password !
                    </span>
                    {error && (
                        <span className='self-end text-xs text-red-500'>
                            {error}
                        </span>
                    )}

                    <div className='flex w-full h-8 gap-4'>
                        <span className='flex items-center gap-2 text-sm'>
                            Already have an account?{' '}
                            <Link href={'/signin'}>
                                <a className='text-base font-bold text-primary-orange'>
                                    Login
                                </a>
                            </Link>
                        </span>
                    </div>
                    <button
                        className='self-end w-24 h-10 rounded-md button infoButton'
                        type='submit'
                    >
                        {loading ? 'Loading...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
