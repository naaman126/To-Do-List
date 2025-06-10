import React from 'react';

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
    <footer>
        <p>COPYRIGHT ⓒ {currentYear}</p>
    </footer>
    )
}

export default Footer;