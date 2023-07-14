import { FormEvent, useState } from 'react'
import { UseAuth } from '../context/Authcontext'
import { useTodo } from '../context/TodoContext'

export const RegisterPage = () => {
 
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
     const {registeruser} = UseAuth()
     const {getTodo} = useTodo()

  const handlelogin = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        registeruser(Username,Password)
        getTodo()
  }
  return (
    <div>
        <h1>Register Page</h1>
        <form onSubmit={handlelogin}>
          <input type="text" name='username'  placeholder='Enter your Username' onChange={(e) => setUsername(e.target.value)} />
          <br />
          <input type="password" name='password' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
