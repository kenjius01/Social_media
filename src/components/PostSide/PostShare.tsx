import Image from 'next/image';
import React, { useRef, useState } from 'react';
import avt from '../../img/avt.jpg';
import { BsFillImageFill } from 'react-icons/bs';
import { RiVideoAddFill } from 'react-icons/ri';
import { ImLocation2 } from 'react-icons/im';
import { FaTimes } from 'react-icons/fa';

import { MdOutlineInsertEmoticon } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { uploadPost } from '../../actions/PostAction';

const PostShare = () => {
    const [uploading, setUploading] = useState(false);
    const dispatch = useDispatch();
    const [image, setImage] = useState<{ image: any }>();
    // const imageRef = useRef();
    const desc = useRef<any>();
    const user = useSelector((state: any) => state.authReducer.authData);
    const imgRef = useRef(null);

    const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage({
                image: img,
            });
        }
    };

    const handleChooseImg = () => {
        let element: any = imgRef.current;
        element.click();
    };

    const handleShare = async () => {
        setUploading(true)
        const newPost = {
            userId: user.id,
            desc: desc.current.value,
            image: '',
        };
        if (image) {
            const data = new FormData();
            data.append('file', image.image);
            data.append('upload_preset', 'upload');
            try {
                const uploadRes = await axios.post(
                    'https://api.cloudinary.com/v1_1/ktdev/image/upload',
                    data
                );
                const { url } = await uploadRes.data;
                newPost.image = url;
            } catch (error) {
                console.log(error);
            }
        }
        dispatch(uploadPost(newPost) as any);
        setUploading(false)
        resetShare();
    };
    // Reset Post Share
    const resetShare = () => {
        setImage({ image: null });
        desc.current.value = '';
    };

    return (
        <div className='flex justify-center gap-4 p-4 mb-6 postShare bg-card-color rounded-2xl'>
            <div className='postImg'>
                <Image
                    src={user?.avatar || avt}
                    width='48px'
                    height='48px'
                    alt='avt'
                    className='object-cover rounded-full'
                    priority
                />
            </div>
            <div className=' flex flex-col w-[80%]'>
                <input
                    ref={desc}
                    required
                    type='text'
                    placeholder="What's do you think?"
                    className='p-3 text-lg border-none outline-none bg-input-color rounded-xl'
                />
                <div className='flex justify-around postOptions'>
                    <div
                        onClick={handleChooseImg}
                        className='flex items-center gap-1 px-3 py-1 mt-2 text-xl cursor-pointer option rounded-xl'
                    >
                        <BsFillImageFill className='text-photo-color' />
                        Photo
                    </div>
                    <div className='flex items-center gap-1 px-3 py-1 mt-2 text-xl cursor-pointer option rounded-xl'>
                        <RiVideoAddFill className='text-video-color' />
                        Video
                    </div>
                    <div className='flex items-center gap-1 px-3 py-1 mt-2 text-xl cursor-pointer option rounded-xl'>
                        <ImLocation2 className='text-location-color' />
                        Location
                    </div>
                    <div className='flex items-center gap-1 px-3 py-1 mt-2 text-xl cursor-pointer option rounded-xl'>
                        <MdOutlineInsertEmoticon className='text-shedule-color' />
                        Emotion
                    </div>
                    <button
                        onClick={handleShare}
                        className='w-24 h-10 px-5 mt-3 text-base rounded-xl button'
                        disabled={uploading}
                    >
                        {uploading ? 'Uploading...' : 'Share'}
                    </button>
                    <div className='hidden'>
                        <input
                            type='file'
                            name='myImage'
                            ref={imgRef}
                            onChange={onImgChange}
                        />
                    </div>
                </div>
                {image?.image && (
                    <div className='relative mt-5 showImg'>
                        <FaTimes
                            className='absolute top-0 right-0 z-10 text-2xl cursor-pointer'
                            onClick={() => setImage({ image: '' })}
                        />

                        <div className='relative w-full h-full imgPreview'>
                            <Image
                                width='100%'
                                height='80%'
                                src={URL.createObjectURL(image.image)}
                                alt='img'
                                className='object-contain'
                                layout='responsive'
                                priority
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostShare;
