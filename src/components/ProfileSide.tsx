import React from 'react'
import FollowersCard from './FollowersCard'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'

const ProfileSide = () => {
  return (
    <div className="profileSide flex-[3] flex flex-col gap-4 items-center overflow-hidden">
      <LogoSearch/>
      <ProfileCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide