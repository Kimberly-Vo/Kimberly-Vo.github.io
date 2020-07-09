import React, { Component } from 'react'
import styled from 'styled-components'

function Footer(){ 
    return (
        <FooterContainer className = "first-footer">
        <div className = "footer-middle">
        <div className = "container">
        <div className = "row">
        {/* Column 1*/ }
        <div className = "col-md-3 col-sm-6">
        <h4>Contact Me</h4>
        <ul className = "list-unstyled">
            <li>Linkedin</li>
            <li>Email</li>
            <li>Instagram</li>
            <li>some type of address?</li>

        </ul>
        
        </div>
        
        </div>
        </div>
        </div>
        </FooterContainer>
    );
        
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: var(--mainWhite)
}


`;

