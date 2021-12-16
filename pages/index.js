import Head from 'next/head'
import '../styles/Home.module.css'
import Cont from './Home';


export default function Home() {
  return (
    <>
    <Head>
      <title> Reciepe-Blog | Home</title>
      <meta name="viewport" content="width=device-width"/>
    </Head>
    <Cont />
    </>
         )
}
