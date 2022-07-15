import { Modal, useMantineTheme } from '@mantine/core';
import React, { Dispatch, SetStateAction, useState } from 'react';

const ProfileModal = ({
    opened,
    setOpened,
}: {
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
}) => {
    const theme = useMantineTheme();
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
                            name='FirstName'
                        />
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='Last Name'
                            name='LastName'
                        />
                    </div>
                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='Work at'
                            name='worksAt'
                        />
                    </div>
                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='Live in'
                            name='liveIn'
                        />
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='Country'
                            name='country'
                        />
                    </div>
                    <div className='flex w-full h-8 gap-4'>
                        <input
                            type='text'
                            className='flex-1 p-5 border-none rounded-lg outline-none infoInput bg-input-color'
                            placeholder='Relationship Status'
                        />
                    </div>
                    <div className='flex w-full h-8 gap-4'>
                        Profile Image
                        <input type='file' name='profileImg' id='' />
                        Cover Image
                        <input type='file' name='coverImg' id='' />
                    </div>
                    <button className='self-end w-24 h-10 rounded-lg button'>
                        Update
                    </button>
                </form>
            </Modal>
        </>
    );
};

export default ProfileModal;
