import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className = "logo">
                <h1>Reciepe-Blog</h1>
                    <Image opacity={0.5} display={'flex'}
                    
                    
                     src="/logo.png" alt="logo" width={110}
                      height={54}></Image>
            </div>   
            <Link href = "/" ><a>Home</a></Link>
            <Link href = "/about "><a>About</a></Link>
            <Link href = "/reciepe/"><a>All Reciepe</a></Link>
        </nav>
        
     );
}
 
export default Navbar;
