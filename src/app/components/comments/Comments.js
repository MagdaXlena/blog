import pg from "pg";
import Link from "next/link"
import styles from "./page.module.css"
import NewComment from "../newComment/NewComment";
import LikeButton from "../likeButton/LikeButton";
import { revalidatePath } from "next/cache";


export default async function Comments({id}) {

    const db = new pg.Pool({
        connectionString: process.env.DB_URL
    })

        const comments = await db.query('SELECT * FROM blog_comment WHERE blog_id = $1', [id])
        const final = comments.rows
    
        console.log(final)

        async function handleDelete() {
            "use server"
             
            const db = new pg.Pool({
                connectionString: process.env.DB_URL
            })

            await db.query('DELETE FROM blog_comment WHERE blog_id = $1', [id]);

            revalidatePath('/blog/[id]')
        }

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
                    <form  className={styles.deleteButton} action={handleDelete}>
                        <button>Delete</button>
                    </form>
                </div>
            ))}
            <NewComment id={id} />
        </div>
    )
}