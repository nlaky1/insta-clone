import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { useState, useEffect } from 'react'
import { db } from '../Firebase';
import Post from './Post'


function Posts() {
    const [posts, setPosts] = useState([]);
   



    useEffect(() => { 
       return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot =>{
            setPosts(snapshot.docs)
        });

         
    }, [db]);

    console.log(posts);

  return (
    <div>
        {posts.map(post => (
            <Post key={post.id } id={post.id} username={post.data().username} userImage={post.data().profileImg} 
            img={post.data().image} 
            caption={post.data().caption}/>
        ))}
        
        {/** Post*/}

        {/** Post*/}
        {/** Post*/}
        {/** Post*/}
    </div>
  )
}

export default Posts