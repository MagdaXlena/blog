import pg from "pg";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import styles from "./page.module.css"




export default function NewPost() {

    async function handleSubmit(formData) {
        "use server"

        const db = new pg.Pool({
            connectionString: process.env.DB_URL
        })

        const {title, text, img_url}=Object.fromEntries(formData)

        await db.query(`INSERT INTO bikes (title, text, img_url) VALUES ($1, $2, $3)`, [title, text, img_url]);

        revalidatePath('/blog')
        redirect('/blog')
    }

    

    return (
        <div className={styles.postForm}>  
        <form action={handleSubmit} className={styles.form}> 
            <label className={styles.label}>Title
            <input name='title' className={styles.title}></input>
            </label>
            <label className={styles.label}>Text
            <input name='text' className={styles.text}></input>
            </label>
            <label className={styles.label}> Image
            <input name='img_url' className={styles.img_url}></input>
            </label>
            <button className={styles.button} type='submit'>Submit</button>
        </form>
        </div>
    )
}