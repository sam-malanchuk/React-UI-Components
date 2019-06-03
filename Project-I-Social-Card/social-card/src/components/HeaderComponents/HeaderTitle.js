import React from 'react';
import './Header.css';

const d = new Date();
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const HeaderTitle = () => {
    return (
        <h2 className="headerTitle">Lambda School <span className="lightText">@LambdaSchool &bull; {d.getDate() + " " + months[d.getMonth()]}</span></h2>
    )
};

export default HeaderTitle;
