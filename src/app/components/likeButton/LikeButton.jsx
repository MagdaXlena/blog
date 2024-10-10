"use client"

import { useState } from "react"
import styles from "./likeButton.module.css"

export default function LikeButton() {

    const [count, setCount] = useState(0)
    return(
        <div className={styles.likeButton}>
            <p>{count}</p>
            <button className={styles.like} onClick={() => setCount(count + 1)}>Likes</button>
        </div>
    )
}