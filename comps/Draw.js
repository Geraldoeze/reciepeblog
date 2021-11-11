



const DrawerToogle = (props) => {
    console.log(props.clicked)
    return ( 
        <div className="DrawerToggle" onClick={props.clicked}>
            <div></div>           
            <div></div>
            <div></div>

        </div>
     );
}
 
export default DrawerToogle;