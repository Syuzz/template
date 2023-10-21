import { Link } from "react-router-dom"
import"./style.css"
function Header(){
    return(
        <div className="d1">
            <p className="p1">Carint</p>
            <div>
    <Link to="/"><button className="b1">HOME</button></Link>
    <Link to="/about"><button className="b1">ABOUT</button></Link>
    <Link to="/contact"><button className="b1">CONTACT</button></Link>
    <Link to="/service"><button className="b1">SERVICE</button></Link></div>
</div>
    )
}export default Header