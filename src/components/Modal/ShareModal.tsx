import { Modal, useMantineTheme } from '@mantine/core';
import React, { Dispatch, SetStateAction, useState } from 'react';
import PostShare from '../PostSide/PostShare';

const ShareModal = ({
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
              <PostShare/>
            </Modal>
        </>
    );
};

export default ShareModal;
