import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <div className="site-footer">
            <a className="btn primary-btn-color" href="#www.google.com" target="_blank"> Resume <FontAwesomeIcon icon={faDownload} /></a>
            <div className="copyright">
                © Eunice Dhivya 2021
            </div>
        </div>
    )
}

export default Footer
