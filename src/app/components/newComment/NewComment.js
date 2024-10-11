import pg from "pg";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import styles from "./newComment.module.css"

export default function NewComment() {
    

        async function handleSubmit(formData) {
            "use server"
             
            const db = new pg.Pool({
                connectionString: process.env.DB_URL
            })

            const {name, comment} = Object.fromEntries(formData)

            await db.query('INSERT INTO blog_comment (name, comment) VALUES ($1,$2)', [name, comment]);

            revalidatePath('/comments')
        }
        
        return (
            <div className={styles.commentForm}>
                <h2 className={styles.addNewComment}>Add New Comment</h2>
                <form className={styles.comment} action={handleSubmit}>
                    <input  className={styles.input} name='name' placeholder='name'></input>
                    <input className={styles.input} name='comment' placeholder='comment'></input>
                    <button className={styles.input} type='submit'>Submit</button>
                </form>
            </div>
        )
}