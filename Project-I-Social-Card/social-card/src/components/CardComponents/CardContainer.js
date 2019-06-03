import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => {
    return (
        <a href="https://www.reactjs.org" target="_blank">
            <div className="cardContainer">
                <CardBanner />
                <CardContent />
            </div>
        </a>
    )
};

export default CardContainer;