import Image from 'next/image';
import React, { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';
import ProfileImg from '../../img/profileImg.jpg';
import { BsFillImageFill } from 'react-icons/bs';
import { RiVideoAddFill } from 'react-icons/ri';
import { ImLocation2 } from 'react-icons/im';
import { FaTimes } from 'react-icons/fa';

import { MdOutlineInsertEmoticon } from 'react-icons/md';

const PostShare = () => {
    const [image, setImage] = useState<{ image: any }>();
    const imgRef = useRef(null);

    const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };

    const handleChooseImg = () => {
        let element: any = imgRef.current;
        element.click();
    };

    return (
        <div className='flex justify-center gap-4 p-4 mb-6 postShare bg-card-color rounded-2xl'>
            <div className='postImg'>
                <Image
                    src={ProfileImg}
                    width='48px'
                    height='48px'
                    alt='avt'
                    className='object-cover rounded-full'
                />
            </div>
            <div className=' flex flex-col w-[80%]'>
                <input
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
                    <button className='w-24 h-10 px-5 mt-3 text-base rounded-xl button'>
                        Share
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
                                src={image.image}
                                alt='img'
                                className='object-contain'
                                layout='responsive'
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostShare;
