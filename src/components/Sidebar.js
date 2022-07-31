import React, { useState } from 'react';
import MainMenu from './MainMenu';

function Sidebar() {
    const innerContent = document.getElementById("innerContent");
    // let innerContentPos = innerContent.getBoundingClientRect().top;
    const [sticky, setSticky] = useState(false);
    

    // const makeSticky = () => {
    //     if(window.scrollY >= innerContentPos){
    //         setSticky(true);
    //     }else{
    //         setSticky(false);
    //     }
    // }

    console.log(innerContent);
    
    // window.addEventListener("scroll", makeSticky);

  return (
    <nav className={sticky? "site-nav sticky" : "site-nav" } id="site-nav">
                <div className="site-branding">
                    ED
                </div>
                <MainMenu />

            </nav>
  )
}

export default Sidebar