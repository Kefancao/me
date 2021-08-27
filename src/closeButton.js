import React from 'react'
import './closeButton.css'

export default function CloseButton(props) {

	const clicked = () => {
		setTimeout(() => props.setClicked(old => !old), 300); 
	}
	return (
			<div class="btn-close b-3" onClick={clicked}> x </div>
	)
}
