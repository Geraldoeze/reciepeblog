import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import '../styles/Home.module.css'
import 'materialize-css/dist/css/materialize.min.css'



export default function Home() {
  return (
    <>
    <Head>
      <title> Reciepe-Blog | Home</title>
      <meta name="viewport" content="width=device-width"/>
    </Head>
    <script src="https://cdnjs.cloudfare.com/ajax/libs/materialize.min.js"></script>

    <div >
      <h1 className = {styles.title}>Welcome to Reciepe-Blog </h1>
      <p className= {styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis 
        veritatis perspiciatis delectus odit! Ex iure, quia dolorem 
        suscipit fugit quos repudiandae reprehenderit nesciunt natus, dol
        ore, quisquam earum excepturi sapiente.</p>
      <p className={styles.text}>Lorem Foot Continel</p>
      <Link href = "/reciepe">
        <a className={styles.btn}>See Reciepe List</a>
      </Link>
    </div>
    </>
         )
}
