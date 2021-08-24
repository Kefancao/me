import React, {useRef} from 'react' 
import './vert-card.css'

export default function Card2(props) {
	const card1 = useRef(); 
	const card2 = useRef(); 
	const card3 = useRef(); 

	const flip = (card) => {
		switch (card){
			case 1: 
				card1.current.classList.toggle('is-flipped'); 
				break; 
			case 2: 
				card2.current.classList.toggle('is-flipped'); 
				break; 
			case 3: 
				card3.current.classList.toggle('is-flipped'); 
				break; 
			default: 
				card1.current.classList.toggle('is-flipped'); 
		}
	}

	return (
		<div className="vert-cards-container">
			<div className="vert-scene">
				<div ref ={card1} style = {{opacity : props.opac}} className="vert-card" onClick={()=>flip(1)}>
					<div className="face front">
						<h3 className="name">Technical Skills</h3> 
					</div>
					<div className="face back"> 
					</div>
				</div>  
			</div>
			<div className="vert-scene">
				<div ref ={card2} style = {{opacity : props.opac}} className="vert-card" onClick={()=>flip(2)}>
					<div className="face front">
						<h3 className="name">Education</h3> 
					</div>
					<div className="face back"> 
					</div>
				</div>  
			</div>
			<div className="vert-scene">
				<div ref ={card3} style = {{opacity : props.opac}} className="vert-card" onClick={()=>flip(3)}>
					<div className="face front">
						<h3 className="name">Hobbies</h3> 
					</div>
					<div className="face back"> 
					</div>
				</div>  
			</div>
		</div>
	)
}
