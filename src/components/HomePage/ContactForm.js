import React from 'react'
import Title from '../Title';

function ContactForm() {
    return (
        <section className="contact-form">
          <div className="inside-container">
              <Title title="contact" color="#e8f4dc" />
              <div className="contact-form-center">
            <form >
                <div className="form-inputs-texts">
                  <div className="inputs">
                      <p><label htmlFor="name">FULLNAME</label></p>
                      <input type="text" className="name" name="" id=""/>
                      
                      <p><label htmlFor="email">EMAIL</label></p>
                      <input type="email" className="email" name="" id=""/>
                </div> 

                <div className="form-texts">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, earum incidunt. Esse impedit magni accusamus consectetur libero odit, sint assumenda. Eveniet ea consectetur at debitis, nisi sint voluptatem aliquid molestias.</p>
                    <p>lorem ipsum</p>
                    <p>+00 123 street,city,country</p>
                    <p>(000) 000-0000</p>
                </div> 

                </div>
                <div className="form-area">
                    <p><label htmlFor="message">MESSAGE</label></p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button type="button" className="btnForm">MESSAGE</button>
            </form>
              </div>
          </div>
      </section>
    )
}

export default ContactForm
