import React from "react";
import PillNav from "../Reactbits/PillNav";

function Header() {
    return(
        <header className="d-flex justify-content-center py-3"> 
             <PillNav
                 logo="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                 logoAlt="Logo"
                 items={[
                        { label: 'Home', href: '/' },
                        { label: 'About', href: '/about' },
                        { label: 'Services', href: '/services' },
                        { label: 'Contact', href: '/contact' }
                    ]}
                    activeHref="/"
                    className="custom-nav"
                    ease="power2.easeOut"
                    baseColor="#000000"
                    pillColor="#ffffff"
                    hoveredPillTextColor="#ffffff"
                    pillTextColor="#000000"
                    theme="light"
                    initialLoadAnimation={false}
                />
        </header>    
    );
}

export default Header;