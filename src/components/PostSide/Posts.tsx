import React from 'react'
import { PostsData } from '../../data/PostData'
import Post from './Post'

const Posts = () => {
  return (
    <div className="flex flex-col h-screen gap-4 overflow-x-hidden overflow-y-auto posts">
        {PostsData.map((post, id) => (
            <Post key={id} post={post}/>
        ))}
    </div>
  )
}

export default Posts