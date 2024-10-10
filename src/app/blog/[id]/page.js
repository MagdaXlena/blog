import pg from "pg";
import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";



export default async function Page({params}) {
    const db = new pg.Pool ({
        connectionString: process.env.DB_URL
    })

    const bike = (await db.query(`SELECT * FROM bikes WHERE id = $1`, [params.id])).rows[0]

    return (
        <div className={styles.blogContainer}>
            <div className={styles.imgContainer}>
                <Image 
                src={bike.img_url} 
                alt={bike.title} 
                height={500}
                width={500}
                className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.blogTitle}>{bike.title}</h1>
                <p className={styles.blogText}>{bike.text}</p>
                <Link href="/comments">
                    <button className={styles.button}>Add comment</button>
                </Link>
            </div> 
            
           
        </div>
    )
}