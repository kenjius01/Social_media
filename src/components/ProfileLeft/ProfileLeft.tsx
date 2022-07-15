import React from 'react'
import FollowersCard from '../FollowersCard'
import LogoSearch from '../LogoSearch'
import InfoCard from './InfoCard'

const ProfileLeft = () => {
  return (
    <div className='flex flex-col items-center gap-4 mt-3 overflow-hidden profileLeft'>
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft