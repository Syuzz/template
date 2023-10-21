import "./style.css";
import Com1 from "../../components/cop1/cop1";
function Service() {
    let object=[
        {id:1,src:"./images/pic1.jpg",text1:"AIR TRANSPORT"},
        {id:2,src:"./images/pic2.jpg",text1:"CARGO TRANSPORT"},
        {id:3,src:"./images/pic3.jpg",text1:"TRUCKS TRANSPORT"},
        {id:4,src:"./images/pic4.jpg",text1:"TRAIN TRANSPORT"},


    ]
	return (
		<div className="ds1">
			<h1>Our Services</h1>
			<p>
				There are many variations of passages of Lorem Ipsum available,
				but the majority have suffered alteration
			</p>
            <div className="do1">
                {
                    object.map((elm)=>{
                        return <Com1 key={elm.id} box={elm}/>
                    })
                }
            </div>
		</div>
	);
}
export default Service;
