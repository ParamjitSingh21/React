import React from 'react'
import Title from '../Title';

function WhoIs() {
    return (
        <div className="whoIs">
           <div className="inside-container">
              <Title title="who is john doe" color="#e8f4dc" /> 

              <div className="whoIs-center">
                  <div className="texts">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus reprehenderit non quos sint, repudiandae voluptate facere beatae unde deserunt ratione vel soluta alias quia odit, atque officia, nihil laudantium.</p>
                 </div>
                 <div className="text-icons">
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laboriosam quos vero.</p>
                     <div className="media-icons">
                         <a href="#"><i className="fab fa-twitter"></i></a>
                         <a href="#"><i className="fab fa-facebook-f"></i></a>
                         <a href="#"><i className="fab fa-google-plus-g"></i></a>
                         <a href="#"><i className="fab fa-youtube"></i></a>
                         <a href="#"><i className="fab fa-linkedin-in"></i></a>
                         <a href="#"><i className="fab fa-pinterest-p"></i></a>
                     </div>
                 </div>
             </div> 
            </div> 
        </div>
    )
}

export default WhoIs
