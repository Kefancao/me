import React, {useState} from 'react'
import SendLogo from './send.png'
import './contact-style.css'
import emailjs from 'emailjs-com';
import ContactButton from './contactButton';

function ContactForm(props){ 
	const [name, setName] = useState(''); 
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [submit, setSubmit] = useState(false)

	const handleName = (e) => setName(e.target.value); 
	const handleEmail = (e) => setEmail(e.target.value); 
	const handleMessage = (e) => setMessage(e.target.value); 
	
	const sendEmail = () => {
		emailjs.send('service_air581b', 'template_hqw5b2v', {from_name : name, reply_to : email, message : message}, 
		'user_IxlQUVYISMugxiLGD5jt0')
		setSubmit(true); 
		console.log(submit); 
	}

	return (
		<>
		{!submit ? 

		<div className="contact-box">
			<div id='exit-contact' onClick = {()=> {props.setClicked(old => !old)}}><h1>x</h1></div>
			<div id="contact-wrap">
				<p>Thank you for visiting this website. If you'd like to get in touch, please fill in the form below!</p>
				<div id="name-form">
					<label for="name">Name: </label>
					<input type="text" id="name" value={name} placeholder="Enter your name" onChange={e => handleName(e)}></input>
				</div>
				<div id="email-form">
					<label for="email">Email: </label>
					<input type="text" id="email" value={email} placeholder="Enter your Email" onChange={e => handleEmail(e)}></input>
				</div>

				<div id="message-area">
					<label for="message">Message: </label>
					<textarea id ="message" onChange={e => handleMessage(e)} value={message} placeholder="Enter a message"></textarea>
				</div>
				<button id="submit-button" onClick={sendEmail}>Submit</button>
			</div>
		</div> :
		<div className="contact-box">
			<div id='exit-contact' onClick = {()=> {props.setClicked(old => !old)}}><h1>x</h1></div>
			<div className="end-contact">
				<p>Hey! Thanks for the email. I look forward to reading your message! </p>
			</div>
		</div>
		}
		</>
	)
}

export default function Contact() {
	const [clicked, setClicked] = useState(false); 
	return (
		<div className="contact">
			{!clicked ? <ContactButton setClicked={setClicked}/> : 
				<ContactForm setClicked={setClicked} /> 
			}
		</div>
	)
}
