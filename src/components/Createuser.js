import {UserAuthContextProvider} from "../services/authService"
import {useState} from 'react'
const Createuser = () => {
    const context=UserAuthContextProvider()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleClick = () => {
        console.log(email, password);
        context.signUp(email,password);
    }
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
            <input type="text" placeholder="Email"onChange={(e)=>setEmail(e)} class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Phonenumber" onChange={(e)=>setPassword(e)} class="input input-bordered w-full max-w-xs" />
            <button class="btn btn-outline btn-info" onClick={handleClick}>Info</button>
        </div>
    )
}

export default Createuser;