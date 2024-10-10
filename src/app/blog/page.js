import pg from "pg";
import Link from "next/link";
import styles from "./page.module.css"
import NewComment from "../components/newComment/NewComment";


export default async function BlogPage() {

    const db = new pg.Pool ({
        connectionString: process.env.DB_URL
    })

    const bikes = await db.query('SELECT * FROM bikes')
    const final = bikes.rows

    console.log(final)
    return (
        <div className={styles.blogsContainer}>
        <Link href={"/newpost"}>
            <button className={styles.newPostButton}>Add New Post</button>
        </Link>
            <br></br>
            {final.map(bike => (
                <div className={styles.titlesContainer}> 
                    <Link href={`blog/${bike.id}`} className={styles.blogTitles}>{bike.title} </Link>
                    <br></br>
                    <Link href={`blog/${bike.id}`} className={styles.blogTexts}>{bike.text.substring(0,150)} ... </Link>
                    <br></br>
                    <Link href={`blog/${bike.id}`}>
                        <button className={styles.button}>Read more</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}