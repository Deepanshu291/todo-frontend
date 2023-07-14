
import './App.css'
import { Route,Routes} from 'react-router-dom'
import { Homepage } from './pages/homepage'
import { LoginPage } from './pages/loginpage'
import { Header } from './Components/Header'
import { UseAuth } from './context/Authcontext'

function App() {
  // const [count, setCount] = useState(0)
  // var  authenticated:boolean = true
  const {Authenticate} = UseAuth()
  return (
    <> 
   
    <Header/>
    <Routes>
      <Route  path='/' element={!Authenticate? <LoginPage/>:<Homepage/>} />
      <Route  path='/register' element={<LoginPage/>}/>
      </Routes>
    
    </>
  )
}

export default App
