import React from 'react';
import emailjs from 'emailjs-com';
import "./MailStyles.css";

function Mail() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_xxnqjqf",
            "template_bfp07a3",
            e.target,
            "CyW5uUzBNZ3Qn_mil"
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    return (
        <div id="contact" className="container border">
            <h1>Contact Us</h1>
            <form className="row" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" className="form-control" />

                <label>Email</label>
                <input type="email" name="user_email" className="form-control" />

                <label>Message</label>
                <textarea name="message" rows="4" className="form-control" />

                <input type="submit" value="Send" className="form-control btn btn-primary" style={{ marginTop: '30px' }} />
            </form>
        </div>
    );
}

export default Mail;
