import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from "react-router"
import { createPost } from '../actions/index';
class Connect extends Component {
    render() {
       
        const {fields:{title,categories,content},handleSubmit}=this.props;
        return (
            <section className="contact">
                <div className="social column">
                    <h3>About Me</h3>
                    <p>Mus sed interdum nunc dictum rutrum scelerisque erat a parturient condimentum potenti dapibus vestibulum condimentum per tristique porta. Torquent a ut consectetur a vel ullamcorper a commodo a mattis ipsum className quam sed eros vestibulum quisque a eu nulla scelerisque a elementum vestibulum.</p>
                    <p>Aliquet dolor ultricies sem rhoncus dolor ullamcorper pharetra dis condimentum ullamcorper rutrum vehicula id nisi vel aptent orci litora hendrerit penatibus erat ad sit. In a semper velit eleifend a viverra adipiscing a phasellus urna praesent parturient integer ultrices montes parturient suscipit posuere quis aenean. Parturient euismod ultricies commodo arcu elementum suspendisse id dictumst at ut vestibulum conubia quisque a himenaeos dictum proin dis purus integer mollis parturient eros scelerisque dis libero parturient magnis.</p>
                    <h3>Follow Me</h3>
                    
                </div>
                <div className="column">
                    <h3>Get in Touch</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="field half first">
                            <label for="name">Name</label>
                            <input name="name" id="name" type="text" placeholder="Name" {...title}/>
                        </div>
                        <div className="field half">
                            <label for="email">Email</label>
                            <input name="email" id="email" type="email" placeholder="Email" {...categories}/>
                        </div>
                        <div className="field">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="6" placeholder="Message" {...content}></textarea>
                        </div>
                        <ul className="actions">
                            <li><input value="Send Message" className="button" type="submit"/></li>
                        </ul>
                    </form>
                </div>
            </section>

        );
    }
}


export default reduxForm({
    form:'PostsNewForm',
    fields:['title','categories','content']
},null,{createPost})(Connect);