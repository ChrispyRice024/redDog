import React from 'react'
import emailjs from 'emailjs-com';

export default class Order extends React.Component{
    render(){

        const handleSubmit = (e) => {
            emailjs.init('q7xnBnzBJbMFK-MJO')
            e.preventDefault()

            e.target.contact_number.value = Math.random() * 100000 | 0
            emailjs.sendForm('service_4x8pudi', 'template_11bhhk5', e.target)
            .then(function(res){
                console.log('Success', res.status, res.text)
            }, function(err){
                console.log('Failed', err)
            })
        }

        return(
            <div id='order'>
                <form id='contact_form' onSubmit={handleSubmit}>
                    <input type="hidden" name="contact_number"/>
                    <p><label htmlfor='user_name'>Name:  </label>
                    <input name='user_name' type='text' placeholder='Your Name' /></p>
                    <p><label htmlfor='user_email'>E-Mail:  </label>
                    <input name='user_email' type='email' placeholder='Your E-Mail' /> </p>
                    <p><label htmlFor='city'>City: </label>
                    <input type='text' name='city' placeholder='City'/> </p>
                    <p><label htmlfor='type'>What Type of Work are you looking for?  </label> 
                    <input name='type' type='text' placeholder='Cabinet/Table/Chair'/></p>
                    <p><textarea id='message' rows='21' cols='40' name='message' type='textarea' wrap='hard' placeholder='If You Have any specifics please, put them here.'></textarea> </p>
                    <input type='submit' value='Send Message'/>
                </form>
            </div>
        )
    }
}