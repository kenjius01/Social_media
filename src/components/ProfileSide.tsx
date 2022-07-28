import React from 'react';
import { FollowerInfo } from '../pb/apiservice';
import CardIntro from './CardIntro';
import FollowersCard from './FollowersCard';
import LogoSearch from './LogoSearch';
import ProfileCard from './ProfileCard';

const ProfileSide = ({ followers }: { followers: FollowerInfo[] }) => {
    return (
        <div className="flex flex-col items-center gap-4 mt-3 overflow-hidden profileSide">
            <LogoSearch />
            <div className="w-3/4 mt-4 prfCard">
                <CardIntro />
            </div>
            <FollowersCard followers={followers} />
        </div>
    );
};

export default ProfileSide;
