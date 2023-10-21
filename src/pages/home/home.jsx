import { useState } from "react";
import "./style.css";
import Service from "../service/service";
import About from "../about/About";
import Contact from "../contact/contact";

function Home() {
	let obj = {
		width: "100%",
		padding: "60px 0px",
		backgroundImage: "url(./images/picture.jpg)",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		overflow: "hidden",
	};
	let obj2 = {
		width: "100%",
		height: "40vh",
		padding: "60px 0px",
		backgroundImage: "url(./images/bgimage.jpg)",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		overflow: "hidden",
	};

	let [val, setVal] = useState(0);
	return (
		<div className="dh">
			<div style={obj}>
				<div
					className="dd2"
					style={{ transform: `translateX(-${val}%)` }}
				>
					<div className="dd1">
						<h1 className="ho1">
							WE PROVIDE BEST<br></br>
							TRANSPORT SERVICE
						</h1>
						<p className="hp1">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Eum magnam, voluptates distinctio, officia
							architecto tenetur debitis hic aspernatur libero com
						</p>
						<p className="hp2">Get a Quote</p>
					</div>
					<div className="dd1">
						<h1 className="ho1">
							WE PROVIDE BEST<br></br>
							TRANSPORT SERVICE
						</h1>
						<p className="hp1">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Eum magnam, voluptates distinctio, officia
							architecto tenetur debitis hic aspernatur libero com
						</p>
						<p className="hp2">Get a Quote</p>
					</div>

					<div className="dd1">
						<h1 className="ho1">
							WE PROVIDE BEST<br></br>
							TRANSPORT SERVICE
						</h1>
						<p className="hp1">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Eum magnam, voluptates distinctio, officia
							architecto tenetur debitis hic aspernatur libero com
						</p>
						<p className="hp2">Get a Quote</p>
					</div>
				</div>
				<div className="dd3">
					<button
						className="btn"
						onClick={() => {
							setVal(0);
						}}
					></button>
					<button
						className="btn"
						onClick={() => {
							setVal(33.3);
						}}
					></button>
					<button
						className="btn"
						onClick={() => {
							setVal(66.6);
						}}
					></button>
				</div>
			</div>
			<div style={obj2}>
				<div className="dh1">
				<h1>Track Your Shipment</h1>
				<p>Iste reprehenderit maiores facilis saepe cumque molestias. Labore iusto excepturi, laborum aliquid pariatur veritatis autem, mollitia sint nesciunt hic error porro.Deserunt officia unde repellat beatae ipsum sed. Aperiam tempora consectetur voluptas magnam maxime asperiores quas similique repudiandae, veritatis reiciendis harum fuga atque.</p>
				<input className="inp" placeholder="Enter Your Tracking Number"/>
				<button className="btn2">TRACK</button>
				</div>
				
			</div>
<div>
					<h1>What Says Our<span className="sp"> Client</span></h1>
				</div>

						<div className="clients">
							<div className="cl1">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
							
							<img className="img2" src="./images/client1.png"/>
							<p>Adipicking<br></br>Magna</p>
							</div>
							<div className="cl1">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
							
							<img className="img2" src="./images/client1.png"/>
							<p>Adipicking<br></br>Magna</p>
							</div>
							
						</div>
						



			<Service />
			<About />
			<Contact />
		</div>
	);
}
export default Home;
