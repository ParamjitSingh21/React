import React from 'react';
import Title from '../Title';
import {Context} from '../Context/Context';

export default function Popular() {
    
    const {blogItems}=React.useContext(Context);
        return(
            <section className="blog">
             <div className="inside-container">
                 <Title title="popular blogs" color="grey" />
    <div className="blog-center">
        {blogItems.map(item=>{
            return(
                <div className="single-blog" key={item.id}>
                   <img src={item.img} alt="img"/> 
                   <div className="posts">
            <p>{item.date}</p>
            <p>{item.title}</p>
            <p>{item.words}</p>
                   </div> 
                   <div className="comments">
            <li><a href="#"><i className="fas fa-comment"></i>{item.number1}</a></li>

            <li><a href="#"><i className="far fa-eye"></i>{item.number2}</a></li>

            <li><a href="#"><i className="fas fa-hashtag"></i></a></li>
                   </div>
                </div>
            )
        })}
    </div>
             </div>
            </section>
        )
    
}
