import React,{useContext,useState} from 'react';
import logo from '../main-logo.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Context} from './Context/Context';


 const Navbar=()=> {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const {lnks}=useContext(Context);   
  const ChangeBack=()=>{
    if(window.scrollY>=50){
        setNavbar(true)
    }else{
        setNavbar(false)
    }
  }
  window.addEventListener('scroll',ChangeBack);
     
    return (
    <NavWrapper>
        <div className={navbar?'navbar act':'navbar'}>
            <nav>
                <div className="logobtn">
            <Link to="/"><img src={logo} alt="logo" /></Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
                </div>
                <ul className={click ? 'links active' : 'links'}>
                {lnks.map(res=>{
                    return(
        <li key={res.id}
        onClick={closeMobileMenu}
        ><Link to={res.path}>{res.link}</Link></li>
                    )
                }    
                )}
                </ul>
            </nav>
        </div>
    </NavWrapper>
    )
}

export default Navbar;

const NavWrapper=styled.div`
position:sticky;
top:0;
z-index:9;
transition:all 0.5s ease-in-out;
opacity:.9;

.navbar{
background:rgba(0,0,0,0.3);
    width:100%;
    z-index:8; 
}
.navbar.act{
background:rgba(0,0,0,1); 
}
.logobtn img{
    display:block;
    padding:0px;
    width:100px;
    height:40px;
    object-fit:contain;
}
.header-container{
    width:100%;
    z-index:8;
}
.menu-icon{
cursor: pointer;
display:block;
color:lightgrey
}
.logobtn{
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid grey;
    padding:10px 25px;
}
.links{
    transition:all .5s ease-in-out;
    position:fixed;
    top:61px;
    left:0px;
    right:0px;
    bottom:0px;
    background:rgba(0,0,0,0.9);
    width:400px;
    transform:translate(-100%); 
}
.links.active{
    transform:translate(0%);
    transition:all .5s ease-in-out;
}
.links li a{
color:#fafafa;
display:block;
text-transform:uppercase;
padding:10px;
transition:all .5s ease-in-out;
border:1px solid transparent;
border-bottom:1px solid transparent;
}

.links li a:hover{
color:#fafafa;
display:block;
padding:10px 25px;
transition:all .5s ease-in-out;
border-bottom:1px solid #049fe1;
background:rgba(0,0,0,0.1)
}


 /* Responsive */
 @media screen and (min-width:870px){
     .links{     
transition:all .5s ease-in-out
!important;
    }
 }

 @media screen and (min-width:880px){
.navbar{
    margin:0 auto;
    width:100%
}
.menu-icon{
display:none
}
nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1180px;
    padding:5px 0;
    margin:0 auto;
    position:relative;
}
.links{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-right:10px;
    width:auto;
    position:relative;
    top:auto;
    background:transparent;
    transform:translate(0);
    transition:all 0s ease-in-out
}
.links li a{
    margin:0 2px
}
.links li a:hover{
    margin:0 2px;
    padding:10px;
    border:1px solid #049fe1;
    background:transparent;
}
.logobtn{
    border-bottom:0
}
 }


 @media screen and (min-width:960px){
     .logobtn img{
         display:block;
         padding:0 0px;
     }
 }













`