import styled from 'styled-components'

export const Bar = styled.button`
height: 30px;
width: 30px;
color: white;
display: none;
position: absolute;
right: 0;
top: 0;
margin-top: 10px;
margin-right: 20px;
background-color: black;
border: none;

@media all and (max-width: 768px){
    display: block;
    cursor: pointer;
}
`
export const UL = styled.ul`
                        margin: 0;
                        padding: 0;
                        list-style-type: none;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        width: 100%;
    @media all and (max-width: 768px){
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: steelblue;
    width: 20%;
    text-align: left;
    padding: 50px;
    transform: translateX(-1000px);
}
`

export const LI = styled.li`

    @media all and (max-width: 768px){
    padding: 20px;
    border-bottom: 1px solid white;

}
`

export const A = styled.div`
    text-decoration: none;

`