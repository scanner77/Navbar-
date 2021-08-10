import React, {useState} from 'react'
import styled from 'styled-components'
import {Bar, UL , LI, A} from './NavbarElements'



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
`

const Navbar = () => {
 
        const [openMenu, setOpenMenu] = useState(false)

    return (       
           <NavWrapper>
           <UL style = {{ transform: openMenu ? "translateX(-500px)" : "translateX(0px)"}}>
            <LI>
                   <A href = "#">Home</A>
                   </LI>
               <LI>
               <A href = "#">Contact Us</A>
                   </LI>
               <LI>
               <A href = "#">About</A>
                   </LI>
               <LI>
               <A href = "#">Signup</A>
                   </LI>
               
           </UL>
           <Bar><i onClick = {() => setOpenMenu(!openMenu)} className = "bar" class="fas fa-bars"/></Bar>
           </NavWrapper> 

    )
}

export default Navbar
