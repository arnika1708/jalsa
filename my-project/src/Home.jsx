import img1 from "../src/assets/home.jpeg";

import './Home.css'

export default function Home(){
    return(
        
            <div className="wrapper">
            <img className="img-wrap" src={img1} alt="" />
            </div>
        
    );
}