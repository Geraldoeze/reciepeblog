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
    
    return ( 
        <div>
            <h1>{reciepe.title}</h1>
            <p>{reciepe.author}</p>
            <p>{reciepe.ingredients}</p>

        </div>
     );
}
 
export default Details;
