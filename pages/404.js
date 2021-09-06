import Link from "next/link";
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
    const router = useRouter();
    useEffect(()=>{
     setTimeout(()=> {
        router.push('/');
     }, 4000)  
    }, [])

    return (  
        <div className={styles.error}>
            <h1>Ooooppps</h1>
            <p>Sorry this page does not exist</p>
            <p>Click here to go to <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default Error;