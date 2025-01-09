import React, { useEffect, useState } from 'react'
import appwriteService from "../../appwrite/config.js";
import Container from '../container/Container.jsx';
import Postcard from '../Postcard.jsx';

function Allposts() {
    const [post, setPosts] = useState([]);
    useEffect(() => {}, []);
    appwriteService.getPosts([])
                    .then((posts) => {
                        if (posts) {
                            setPosts(posts);
                        }
                    })

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {post.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Postcard post={post}/>
                    </div> 
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Allposts