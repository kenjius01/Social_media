import { Modal, useMantineTheme } from '@mantine/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, {
    Dispatch,
    SetStateAction,
    SyntheticEvent,
    useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../actions/UserAction';
import { Userinfo } from '../../pb/apiservice';
import ReactLoading from 'react-loading';

const ProfileModal = ({
    opened,
    setOpened,
    userInfo,
}: {
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
    userInfo: Userinfo;
}) => {
    const router = useRouter();
    const theme = useMantineTheme();
    const [formData, setFormData] = useState<Userinfo>(userInfo);
    const [profileImg, setProfileImg] = useState<any>(null);
    const [coverImg, setCoverImg] = useState<any>(null);
    const dispatch = useDispatch();
    const [uploading, setUploading] = useState(false);
    // const id = router.query.id;
    // const user = useSelector((state: any) => state.authReducer.authData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            e.target.name === 'avatar' ? setProfileImg(img) : setCoverImg(img);
        }
    };

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setUploading(true);
        if (profileImg) {
            const data = new FormData();
            data.append('file', profileImg);
            data.append('upload_preset', 'upload');
            try {
                const uploadRes = await axios.post(
                    'https://api.cloudinary.com/v1_1/ktdev/image/upload',
                    data
                );
                const { url } = await uploadRes.data;
                formData.avatar = url;
            } catch (error) {
                console.log(error);
            }
        }
        if (coverImg) {
            const data = new FormData();
            data.append('file', coverImg);
            data.append('upload_preset', 'upload');
            try {
                const uploadRes = await axios.post(
                    'https://api.cloudinary.com/v1_1/ktdev/image/upload',
                    data
                );
                const { url } = await uploadRes.data;
                formData.coverImg = url;
            } catch (error) {
                console.log(error);
            }
        }
        dispatch(updateUser(formData) as any);
        setOpened(false);
        setFormData(userInfo);
        setUploading(false);
    };

    return (
        <>
            <Modal
                opened={opened}
                centered
                onClose={() => setOpened(false)}
                withCloseButton={false}
                size='50%'
                overlayColor={
                    theme.colorScheme === 'dark'
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
            >
                <form
                    action=''
                    className='flex flex-col items-center justify-center gap-8 px-20 py-4 infoForm'
                >
                    <h3 className='text-3xl font-bold text-primary-orange'>
                        Your info
                    </h3>
                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='First Name'
                            defaultValue={formData?.firstName}
                            name='firstName'
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='Last Name'
                            name='lastName'
                            defaultValue={formData?.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='Work at'
                            name='workAt'
                            defaultValue={formData?.workAt}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='Live in'
                            name='address'
                            defaultValue={formData?.address}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='Description'
                            name='desc'
                            defaultValue={formData?.desc}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='Relationship Status'
                            defaultValue={formData?.relationship}
                            name='relationship'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex w-full h-8 gap-4'>
                        Profile Image
                        <input
                            type='file'
                            name='avatar'
                            id=''
                            onChange={onImgChange}
                        />
                        Cover Image
                        <input
                            type='file'
                            name='coverImg'
                            id=''
                            onChange={onImgChange}
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        className='self-end w-24 h-10 rounded-lg button'
                        disabled={uploading}
                    >
                        {uploading ? 'Updating....' : 'Update'}
                    </button>
                </form>
            </Modal>
        </>
    );
};

export default ProfileModal;
