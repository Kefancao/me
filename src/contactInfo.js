import React, {useState} from 'react'
import SendLogo from './send.png'

export default function Contact() {
	const [clicked, setClicked] = useState(false); 
	const [name, setName] = useState(''); 
	const [email, setEmail] = useState('')

	const handleName = (e)=> setName(e.current.value); 
	const handleEmail = (e)=> setEmail(e.current.value); 

	return (
		<div className="contact">
			{!clicked ? <img onClick = {()=> {setClicked(old => !old)}} src={SendLogo} id = "send-icon" alt="Send"></img> : 
				<div className="contact-box">
					<p>Thank you for visiting this website. If you'd like to get in touch, please fill in the form below!</p>
					<form id="contact-form">
						<label>Name: </label>
						<input type="text" value={name} placeholder="Enter your name" onChange={e => handleName(e)}></input>
						<label>Email: </label>
						<input type="text" value={email} placeholder="Enter your Email" onChange={e => handleEmail(e)}></input>
						<button>Submit</button>
					</form>
				</div>
			}
		</div>
	)
}
