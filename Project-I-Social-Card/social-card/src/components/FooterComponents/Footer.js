import React from 'react';
import './Footer.css';

const FooterContainer = () => {
    return (
        <div className="footerContainer">
            <div className="footerIcon comment"><i className="far fa-comment"></i></div>
            <div className="footerIcon repost"><i className="fas fa-sync"></i> 6</div>
            <div className="footerIcon like"><i className="far fa-heart"></i> 4</div>
            <div className="footerIcon message"><i className="far fa-envelope"></i></div>
        </div>
    )
};

export default FooterContainer;