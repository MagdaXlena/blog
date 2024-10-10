import pg from "pg";
import Link from "next/link"
import styles from "./page.module.css"
import NewComment from "../components/newComment/NewComment";
import LikeButton from "../components/likeButton/LikeButton";


export default async function Comments() {

    const db = new pg.Pool({
        connectionString: process.env.DB_URL
    })

        const comments = await db.query('SELECT * FROM blog_comment')
        const final = comments.rows
    
        console.log(final)
    return (
        <div className={styles.commentsContainer}>
            <h2> Comments</h2>
            {final.map(comment => (
                <div key={comment.id} className={styles.comments}>
                    <div className={styles.name}>{comment.name}</div>
                    <br></br>
                    <div className={styles.comment}>{comment.comment}</div>
                    <br></br>
                    <LikeButton />
                </div>
            ))}
            <NewComment />
        </div>
    )
}