import React, {useRef} from 'react'
import CV from './cv.png'
import GitHubIcon from './github.png'
import LinkedInIcon from './linkedin.png'
import SendLogo from './send.png'

export default function Card1(props) {

	const card = useRef(); 
	const flip = () => {
		console.log(card.current.classList.toggle('is-flipped')); 
	}

	const scroll = (e) => {
		e.target.classList.toggle('fade-out')
	}

	return (
		<div className="scene">
			<div style = {{opacity : props.opac}} ref={card} className="card" onClick={flip} onScroll={e => scroll(e)}>
				<div className="face front">
					<h3 className="name">First Last</h3>
					<h3 className="career">Software Developer</h3>
					<div className="external-links">
						<a href="https://github.com/Kefancao" target="_blank" rel="noreferrer"><img src={GitHubIcon} alt="GitHub"></img></a>
						<a href="https://www.linkedin.com/in/kefan-cao-2801bb165/" target="_blank" rel="noreferrer"><img src={LinkedInIcon} alt="LinkedIn"></img></a>
						<a href="google.ca" target="_blank" rel="noreferrer"><img src={CV} alt="Resume"></img></a>
					</div>
					<div id="connect">
						<div id="input-box">
							<input type="text" placeholder="Leave your email to connect!" onClick={flip}></input>
							<a href="google.ca"><img src={SendLogo} alt="Send"></img></a>
						</div>
					</div>
					<div className="next">
						<h1>&gt;</h1>
					</div> 
				</div>
				<div className="face back">Hi</div>
			</div>
			<div className="ref">HI</div>
		</div>
	)
}
