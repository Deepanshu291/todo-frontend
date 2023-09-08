
import './App.css'
import { Route,Routes} from 'react-router-dom'
import { Homepage } from './pages/homepage'
import { Header } from './Components/Header'

function App() {
 
  return (
    <> 
    <Header/>
    <Routes>
      <Route  path='/' element={<Homepage/>} />
      </Routes>
    
    </>
  )
}

export default App
