import React from 'react'
import Title from '../Title';

function Testimonials() {
    return (
        <div className="testimonial">
             <div className="inside-container">
                 <Title title="testimonials" color="#989c9f" />
                 <div className="testimonial-center">
                     <div className="testimonial-texts">
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa, repellat ullam sunt error necessitatibus architecto dolorem dolorum saepe assumenda commodi rerum perferendis non quam. Corporis eum atque quisquam non!</p>
                     </div>
                     <div className="testimonial-icon">
                         <i className="fas fa-quote-right"></i>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default Testimonials
