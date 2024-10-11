"use client"


import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>
        {isLiked ? '❤️ Liked' : '🤍 Like'}
      </button>
    </div>
  );
};

export default LikeButton;

// import { useState, useEffect} from "react"

// import styles from "./likeButton.module.css"

// export default function LikeButton() {

//     const [likes, setLikes] = useState(0);

//     useEffect(() => {
//         const storedLikes = localStorage.getItem('likes');
//         if (storedLikes) {
//             setLikes(parseInt(storedLikes));
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('likes', likes);
//     }, [likes]);

//     const handleLike = () => {
//         setLikes(likes + 1);
//     };

//     return(
//         <div>
//             <button className={styles.likeButton} onClick={handleLike}>
//             <p>{likes} {likes ===1 ? 'like' : 'likes'}</p>
//             </button>
//         </div>
//     )
// }

    // const [count, setCount] = useState(0)

            {/* <p>{count}</p>
            <button className={styles.like} onClick={() => setCount(count + 1)}>Likes</button> */}