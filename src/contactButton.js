import React from 'react'
import './contactButton.css'

export default function ContactButton(props) {

	const clicked = () => {
		setTimeout(() => props.setClicked(old => !old), 300); 
	}
	return (
		<div onClick={clicked} id="send-icon">
			<div class="btn b-3">Contact</div>
		</div>
	)
}
