import React from 'react';
import Title from '../Title';
import {Context} from '../Context/Context';

function Portfolio() {
    const {portfolio}=React.useContext(Context);
    return (
        <div className="portfolio">
            <div className="inside-container">
                <Title title="portfolio" />
                <div className="portfolio-center">
                    {portfolio.map(res=>(
                        <div key={res.id} className="single-portfolio">
                        <img src={res.img} alt="logo" />
                        <div className="plus">
                        <i className={res.plus}></i>
                        </div>
                        </div>
                    ))}
        </div>
            </div>
        </div>
    )
}

export default Portfolio
