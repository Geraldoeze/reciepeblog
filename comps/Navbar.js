import Link from 'next/link';

import DrawerToogle from './Draw';
import Backdrop from './SideDrawer';
  
     
const Navbar = (props) => {
    let attachedClasses = ["open "];
    if(props.open) {
        attachedClasses = ["close"];
    }
    return (
    <div>
         
        <Backdrop show={props.open} clicked={props.closed} />       

        <nav>
            <h1 onClick={props.drawerTogged} className = "logo">Reciepe-Blog</h1>
               <a className="navbar"> 
                   <DrawerToogle clicked={props.drawerTogged}/>
                </a>
                
           <ul className={attachedClasses}>
               <Link href = "/" ><a>Home</a></Link>
               <Link href = "/about "><a>About</a></Link>
               <Link href = "/reciepe/"><a>All Reciepe</a></Link>
               <Link href = "/add" > Add Reciepe</Link>
           </ul>
       </nav>
   </div>
      );
}
 
export default Navbar;
 
 