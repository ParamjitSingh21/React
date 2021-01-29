import React from 'react';
import Title from '../Title';
import BackPerson from '../../images/man.png';
import Bounce from 'react-reveal/Bounce';
import './biographyPage.css';




export default function BiographyPage() {
    return (
        <section className="biography">
            <div className="inside-container">
                <h4>Home decorator</h4>
                <h1>John </h1>
                <div className="biography-links">
                 <li>
                    <a href="#">
                     <p className="p1">HOMEPAGE</p>
                     <p>BIOGRAPHY</p>
                    </a>
                        
                </li>

                <li>
                    <a href="#">
                     <p className="p1">PORTFOLIO</p>
                     <p>MY ART WORDS</p>
                    </a>
                        
                </li>

                <li>
                    <a href="#">
                     <p className="p1">HOMEPAGE</p>
                     <p>BE IN TOUCH</p>
                    </a>
                        
                </li>

                
                <li>
                    <a href="#">
                     <p ><i className="fas fa-search"></i></p>
                   
                    </a>
                        
                </li>
                </div>
                <div className="person">
                    <Bounce top duration={3000}>
                    <div className="personImg">
                        <img src={BackPerson} alt="img"/>
                    </div>
                    </Bounce>
                   
                    <div className="person-texts">
                        <Title title="john doe" color="#fff" />
                        <Bounce right duration={2000} cascade>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, rerum. Quis, maiores nobis! Perferendis fugit nobis, nisi minima porro exercitationem laboriosam et enim quia quisquam amet iusto praesentium ex sunt.</p>
                        </Bounce>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
