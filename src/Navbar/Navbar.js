import React, {useState, useCallback} from 'react'
import styled from 'styled-components'
import {Bar, UL , LI, A} from './NavbarElements'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
const NavWrapper = styled.div`
box-sizing: border-box;
width: 100%;
height: 50px;
background-color: steelblue;
color: white;
padding: 20px;
position: absolute;
top: 0;
left: 0;
margin-bottom: 50px;
cursor: pointer;
`


const Navbar = () => {
 //hook returns the history instance created by React Router, and history. 
 //push(“/profile/John”) adds the given URL to the history stack which results 
 //in redirecting the user to the given URL path.
        const [openMenu, setOpenMenu] = useState(false)
        const history = useHistory();
        const handleOnClick = useCallback(
            () => {
                history.push("/postProducts")
            },
            [history],
        )
    return (       
           <NavWrapper>
           <UL style = {{ transform: openMenu ? "translateX(-500px)" : "translateX(0px)"}}>
            <LI>
                  <Link style = {{textDecoration: 'none', color: 'white'}} to = "/">Home</Link>
                   
                   </LI>
               <LI>
               <A href = "#">Contact Us</A>
                   </LI>
               <LI>
               <A href = "#">About</A>
                   </LI>
               <LI onClick = {handleOnClick}>
               <A href = "#" >Upload</A>
                   </LI>
               
           </UL>
           <Bar><i onClick = {() => setOpenMenu(!openMenu)} className="fas fa-bars"/></Bar>
           </NavWrapper> 

    )
}

export default Navbar
