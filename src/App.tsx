
import './App.css'
import { Route,Routes} from 'react-router-dom'
import { Homepage } from './pages/homepage'
import { LoginPage } from './pages/loginpage'
import { Header } from './Components/Header'
import { UseAuth } from './context/Authcontext'
import { RegisterPage} from './pages/registerpage'

function App() {
  const {token,Authenticate} = UseAuth()
 
  return (
    <> 
   {/* {token?console.log(token):console.log("its null")
   } */}
    <Header/>
    <Routes>
      <Route  path='/' element={!token && !Authenticate? <LoginPage/>:<Homepage/>} />
      <Route  path='/register' element={<RegisterPage/>}/>
      </Routes>
    
    </>
  )
}

export default App
