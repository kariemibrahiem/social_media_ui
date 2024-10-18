
import React from 'react'
import Share from '../share/share'
import Post from '../post/post'
import {Posts} from "../../dummyData";
const Feet = () => {
  return (
    <div>
        <Share/>

        {/* <Post/> */}

        {Posts.map((post) => (
            <Post key={post.id} post={post}/>            
        ))}
        {/* <Post/> */}
        
      
    </div>
  )
}

export default Feet