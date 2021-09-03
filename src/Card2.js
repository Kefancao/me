import React, {useRef} from 'react' 
import './vert-card.css'

export default function Card2(props) {
	const card1 = useRef(); 
	const card2 = useRef(); 
	const card3 = useRef(); 

	const flip = (card) => {
		switch (card){
			case 1: 
				console.log(card1.current.classList); 
				if (card1.current.classList.contains('init')){
					card1.current.classList.toggle('init'); 
					setTimeout(function(){ card1.current.classList.toggle('is-flipped');}, 50);
				} else{
					card1.current.classList.toggle('is-flipped'); 
				}
				break; 
			case 2: 
				if (card2.current.classList.contains('init')){
					card2.current.classList.toggle('init'); 
					setTimeout(function(){ card2.current.classList.toggle('is-flipped');}, 50);
				} else{
					card2.current.classList.toggle('is-flipped'); 
				}
				break; 
			case 3: 
				if (card3.current.classList.contains('init')){
					card3.current.classList.toggle('init'); 
					setTimeout(function(){ card3.current.classList.toggle('is-flipped');}, 50);
				} else{
					card3.current.classList.toggle('is-flipped'); 
				}
				break; 
			default: 
				card1.current.classList.toggle('is-flipped'); 
		}
	}

	return (
		<div className="vert-cards-container">
			<div className="vert-scene">
				<div ref ={card1} style = {{opacity : props.opac}} className="vert-card init" onClick={()=>flip(1)}>
					<div className="face front">
						<h3 className="name">Technical Skills</h3> 
					</div>
					<div className="face back"> 
						<div className="content-container">
							<h3>List of skills I'm equipped with</h3>
							<ul>
								<li>Bash</li>
								<li>C</li>
								<li>C++</li>
								<li>Javascript</li>
								<li>Java</li>
								<li>Python</li>
								<li>R</li>
								<li>MongoDB</li>
								<li>React</li>
								<li>Node.js</li>
								<li>SQL</li>
								<li>TypeScript</li>
								<li>HTML/CSS</li>
							</ul>
						</div>
					</div>
				</div>  
			</div>
			<div className="vert-scene">
				<div ref ={card2} style = {{opacity : props.opac - 0.3}} className="vert-card init" onClick={()=>flip(2)}>
					<div className="face front">
						<h3 className="name">Education</h3> 
					</div>
					<div className="face back"> 
						<div className="content-container">
						<ul>
							<li>University of Waterloo 2020-2025</li><br></br>
							<ul>
								<li>CS136 - Functional Programming (97%)</li>
								<li>CS146 - Advanced Algorithmic Design (100%)</li>
								<li>CS246 - Object Oriented Programming (100%)</li>
							</ul>
						</ul>
						</div>
					</div>
				</div>  
			</div>
			<div className="vert-scene">
				<div ref ={card3} style = {{opacity : props.opac - 0.6}} className="vert-card init" onClick={()=>flip(3)}>
					<div className="face front">
						<h3 className="name">Experience</h3> 
					</div>
					<div className="face back"> 
					<div className="content-container">
						<ul>System Integration Coordinator</ul>
						<ul> 
							<li>Strauss Event/Association Management</li>
							<li>Outstanding co-op rating, (best possible)</li>
						</ul>
					</div>
					</div>
				</div>  
			</div>
		</div>
	)
}
