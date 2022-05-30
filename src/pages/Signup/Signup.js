import Navbar from "../../components/Navbar"
import  "./Signup.css"
import {useState,useEffect} from "react"
import {auth} from "../../services/config"
import {signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"
import {useNavigate} from "react-router-dom"
const Signup=()=>{
    const navigate=useNavigate()
    const [userr,setUserr]=useState("")
    const [user,setUser] = useState("client");
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
             setUserr(currentUser);
         })
         return ()=>{
             unsubscribe();
         }
     },[])
    const handleSubmit=()=>{
        console.log(email,pass,user)
        login(email,pass);
        navigate("../Clientdashboard/Dashboard",{state:{value:userr}});
        setEmail("");
        setPass("");
    }
    return (
    <div className="backgroundImage">
        <Navbar/>
        <div className="flex justify-center content-center my-10">
        <div class="card card-compact signup w-40 bg-base-100 shadow-xl ">
            
            <h1 className="text-center text-3xl font-bold my-2 text-black ">Login</h1>
            <hr className="bg-neutral-focus"></hr>
        <div className="form-control flex flex-row justify-around">
            
            <label className="label cursor-pointer ">
                <span className="label-text text-black">Admin</span> 
                <input type="radio" name="radio-6" class="radio checked:bg-warning mx-3" onClick={()=>setUser("admin")} />
            </label>
            <label className="label cursor-pointer ">
                <span class="label-text text-black">Client</span> 
                <input type="radio" name="radio-6" class="radio checked:bg-warning mx-3" onClick={()=>setUser("client")}/>
            </label>
        </div>
        <div className="mx-7 flex flex-col justify-center">
            <label class="input-group   border-solid border-black border-2 rounded-lg">
                <span className="w-24">Email</span>
                <input type="text" placeholder="info@site.com" class="input input-bordered bg-white w-60 " value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label class="input-group  border-solid border-black border-2 rounded-lg">
                <span className="w-24">Password</span>
                <input type="text" placeholder="info@site.com" class="input input-bordered bg-white w-60 " value={pass} onChange={(e)=>setPass(e.target.value)}/>
            </label>  
            <button class="btn btn-active w-60" onClick={()=>handleSubmit()}>Login</button> 
            <h1 className="text-black">Forgot password </h1>     
            <button class="btn btn-link ">clickhere</button>
        </div>
        </div>
        </div>
    </div>
    )
}
export default Signup;