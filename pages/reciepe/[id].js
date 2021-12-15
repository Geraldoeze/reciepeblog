import { useRouter } from "next/router";
import  styles  from "../../styles'/Reciepe.module.css"

export const getStaticPaths = async () => {
    const res = await fetch("https://obscure-thicket-64942.herokuapp.com/reciepe")
    const data = await res.json();

    const paths = data.map(reciepe => {
        return {
            params: { id: reciepe.id.toString() }
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch(`https://obscure-thicket-64942.herokuapp.com/reciepe/${id}`);
    const data = await res.json();

    return {
        props: {reciepe: data }
    }
}

const Details = ({ reciepe }) => {
    const id = reciepe.id
    // i think we need to work on the id 
    // we need to pass the id gotten from the button click and use that to delete
    // const router = useRouter();
    const Deleteblog = fetch(`https://obscure-thicket-64942.herokuapp.com/reciepe/${id}`, {
        method: "DELETE"
    })
    // .then(router.push('/'))
    // .catch(function(error) {console.log(error)})
    
    return ( 
        <div className={styles.btn}>
            <h1>{reciepe.title}</h1>
            <p>{reciepe.author}</p>
            <p>{reciepe.ingredients}</p>
            <button onClick={Deleteblog}>Delete Blog</button>
        </div>
     );
}
 
export default Details;
