import React, {useRef} from 'react'
import CV from './cv.png'
import GitHubIcon from './github.png'
import LinkedInIcon from './linkedin.png'
import WaterlooIcon from './waterloo.svg'

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
					<h3 className="name">Kefan Cao</h3>
					<h3 className="career">Software Developer</h3>
					<div className="external-links">
						<a href="https://github.com/Kefancao" target="_blank" rel="noreferrer"><img src={GitHubIcon} alt="GitHub"></img></a>
						<a href="https://www.linkedin.com/in/kefan-cao-2801bb165/" target="_blank" rel="noreferrer"><img src={LinkedInIcon} alt="LinkedIn"></img></a>
						<a href="google.ca" target="_blank" rel="noreferrer"><img src={CV} alt="Resume"></img></a>
					</div> 
					<div className="next">
						<h1>&gt;</h1>
					</div> 
				</div>
				<div className="face back">
					<div className="content-container">
						<h3>Welcome!!!</h3>
						<p>
							My name is Kefan, a software developer and Computer Science student at the University of Waterloo.
						</p><br></br>
						<p>
							This website is a show case of what I've been working on. If anything here interests you, I'm always down to talk about it. You can reach 
							me by clicking the contact button on the bottom left corner to send a message!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
