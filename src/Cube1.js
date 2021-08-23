import React, {useState, useRef} from 'react'
import './cube.css'
import LeftNav from './leftArrow.svg'
import RightNav from './rightArrow.svg'

export default function Cube1(props) {
	const cube = useRef(); 
	const [cur, setCur] = useState(301); 
	const faces = ['show-front', 'show-right', 'show-back', 'show-bottom', 'show-left', 'show-top']
	const rotateCube = (dir) => {
		if (dir === 1) setCur(old => old + 1)
		else setCur(old => old - 1)
		cube.current.className = "cube " + faces[cur % 6]; 
		console.log(cur); 
	}
	return (
		<div style={{opacity : props.opac}} className="cube-scene">
			<div className="cube-nav">
				<img onClick={()=>rotateCube(-1)} src={LeftNav} alt="leftArrow" id='left-cube-arrow'></img>
				<img onClick={()=>rotateCube(1)} src={RightNav} alt="rightArrow" id="right-cube-arrow"></img>
			</div>
			<div className="content-wrap">
				<div className="cube-container">
					<div ref={cube} className="cube">
						<div className="cube__face cube__face--front">front</div>
						<div className="cube__face cube__face--back">back</div>
						<div className="cube__face cube__face--right">right</div>
						<div className="cube__face cube__face--left">left</div>
						<div className="cube__face cube__face--top">top</div>
						<div className="cube__face cube__face--bottom">bottom</div>
					</div>
				</div>
				<div className="description">
					<h1>Quick Chat</h1>
					<p>
						Quick Chat is a real-time chat application made using react and firebase. 
						The app allows the user to enter a room key to join a room. 
						The user can choose to join anonymously or sign in via their Google Account.
					</p>
				</div>
			</div>
		</div>
	)
}
