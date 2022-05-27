import "./Dashboard.css"
import Navbar from "../../components/Navbar"
const Dashboard=()=>{
    return(
        <div className="backgroundImage">
            <Navbar/>
        <div className="dash-desc">
            <h1 className="text-5xl font-bold my-2 text-white desc-head">SANJAY </h1>
            <h1 className="text-5xl font-bold text-white desc-head">PHOTO <span className="text-yellow-400">GRAPHY</span></h1>
            <p className="py-5">We are a professional photography services company 
                            based in Chennai,<br/> We have been running a professional 
                            photography business for 6 years.
            </p>
            <button class="btn btn-warning btn-wide ">Explore More</button>
        </div>
        </div>
    )       
}

export default Dashboard;