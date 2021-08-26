import React, {useState, useRef} from 'react'
import './cube.css'
import LeftNav from './leftArrow.svg'
import RightNav from './rightArrow.svg'
import QuickChat from './quickChat.png'

function Description(props){

	switch(props.cur % 6){
		case 1: 
		return (
			<div className="description">
				<h1>Quick Chat</h1>
				<p>
					Quick Chat is a real-time chat application made using react and firebase. 
					The app allows the user to enter a room key to join a room. 
					The user can choose to join anonymously or sign in via their Google Account.
				</p>
				<br></br>
				<p>
					When signed in, the user may be able to create a room and share it with their 
					friends; however, this feature is not possible for anonymous users to prevent 
					them from creating an excessive amount of rooms. Texts sent and received have 
					different styles applied to them and the nature of it resembles the styles of 
					imessage to provide the user a familiar experience. 
				</p>
				<img src={QuickChat} alt="quickChatSS"></img>
			</div>
		); 
		case 3: 
		return (
			<div className="description">
				<h1>kefancao.com</h1>
				<p>
					The website that you're looking at is kefancao.com :) It's created utilizing 
					3D transform techniques of css in combination with React. The 3D cube transformations 
					applies concepts from linear algebra and trignometry. 
				</p>
			</div>
		); 
		case 2: 
		return(
			<div className="description">
				<h1>TypeWriterX</h1>
				<p>
					TypeWriterX is a web app that allows users to test their typing speed. Their typing speed are
					displayed in WPM (words per minute). It is created using React and Firebase (to store user history).
					The web app supports dynamic styling and checks to see if the character entered by the user is correct 
					for each entry and applies the proper styles to it. 
				</p>
			</div>
		); 
		case 5:
			return (<div className="description">
				<h1>River Deliver</h1>
				<p>River Delivery is a grocery/errands company and winner of a $3,000 Entrepeneurship fund from a pool of over 70 applicants. 
					It is developed using React, Firebase, and Email.js (allows email notifications when the user places an order). It 
					attracted over 100 users/customers throughout the summer and netted over $4,000 in revenue. 
				</p>
			</div>); 
		case 0: 
		return (<div className="description">
				<h1>Compiler</h1>
				<p>
					Created in response to a final project. It provides support for basic arithmetic operations, loops, as well as recursive function evaluations.
					It is created in C using the continuation and trampoline design patterns to maximize efficiency. 
				</p>
			</div>); 
		case 4: 
			return(<div className="description">
				<h1>Biquadris</h1>
				<p>
					The biquadris game is an alternate version of traditional tetris with the main difference being that players enable a special action
					to be enacted on the other player if the current player clears two rows. The game is written in C++ using concepts of object oriented programming
					and design patterns including the factory pattern, the observer pattern, and the controller pattern. The game supports both a text-only mode or
					a textGUI mode to be specified at run time. 
				</p>
			</div>); 
		default: 
			return <></>; 
	}

}

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
						<div className="cube__face cube__face--front">Quick Chat</div>
						<div className="cube__face cube__face--back">kefancao.com</div>
						<div className="cube__face cube__face--right">TypeWriterX</div>
						<div className="cube__face cube__face--left">River Deliver</div>
						<div className="cube__face cube__face--top">Compiler</div>
						<div className="cube__face cube__face--bottom">Biquadris</div>
					</div>
				</div>
				{<Description cur={cur}/>} 
			</div>
		</div>
	)
}
