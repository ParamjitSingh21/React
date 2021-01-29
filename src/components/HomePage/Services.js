import React from 'react'
import Title from '../Title';
import {Context} from '../Context/Context';
import Roll from 'react-reveal/Roll';

const Services=()=>{
    const {services}=React.useContext(Context);

    return (
        <div className="services">
        <div className="inside-container">
<Title title="services" color="#eaeaee" />

<div className="service-center">
    {services.map(res=>(
        <div className="single-service" key={res.id}>
        <Roll duration={2000}>
        <i className={res.icon}></i>
        <div className="texts">
            <h3>{res.column}</h3>
            <p>{res.text}</p>
        </div>
        </Roll>
        </div>
    ))}
</div>
        </div>
            
        </div>
    )
}

export default Services
