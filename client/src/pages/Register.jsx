import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

const Register = ({setCurrentPage}) => {
    const [fullName, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
  return (
    <div>
        <form>
            <input type="text" placeholder='Full Name' value={fullName} onChange={(e)=> setFullname(e.target.value)} />
            <input type="email" placeholder='Email Address' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type={showPassword ? "text": "password"} placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            <input type={showPassword ? "text": "password"} placeholder='Confirm Password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
            <button type='button' onClick={()=> setShowPassword(!showPassword)}>{showPassword ? "Hide Password" : "Show Password"} {showPassword ? <EyeOff/> : <Eye/>}</button>
            <button>Create account</button>
            <p>Alreday have an Account? <button>Login</button></p>
        </form>
      
    </div>
  )
}

export default Register
