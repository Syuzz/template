import "./style.css";
function Contact() {
	return (
		<div className="mec4">
			<div className="di1">
                <h1>Contact Us</h1>
				<input className="i1" placeholder="Your Name" />
				<br></br>
				<input className="i2" placeholder="Your Number" />
				<br></br>
				<input className="i3" placeholder="Email" />
				<br></br>
				<input className="i4" placeholder="Message" /><br></br>
               
			</div>
			<div className="dmap">
				<iframe
					src="https://www.google.com/maps/d/embed?mid=1rdyJGY-Fmdr5MpHO4fewJmYh3Sg&hl=en&ehbc=2E312F"
					className="map"
				></iframe>
			</div>
		</div>
	);
}
export default Contact;
