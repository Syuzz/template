import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Service from "./pages/service/service";
import"./assets/global.css"

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>

       <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route> 
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/service" element={<Service/>}></Route> 
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
