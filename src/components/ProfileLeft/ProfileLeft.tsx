import React from 'react';
import { FollowerInfo } from '../../pb/apiservice';
import FollowersCard from '../FollowersCard';
import LogoSearch from '../LogoSearch';
import InfoCard from './InfoCard';

const ProfileLeft = ({ followers }: { followers: FollowerInfo[] }) => {
    return (
        <div className="flex flex-col items-center gap-4 mt-3 overflow-hidden profileLeft">
            <LogoSearch />
            <InfoCard />
            <FollowersCard followers={followers} />
        </div>
    );
};

export default ProfileLeft;
