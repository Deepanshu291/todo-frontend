
import { Link } from 'react-router-dom'

export const Header = () => {
  // const {token,logout} = UseAuth()
  return (
    <div>
        <nav>
            <h2>Todo_APP</h2>
            <ul>
                <Link className='link' to="/">Home</Link>
                {/* <span> | </span>
                {!token?<Link className='link' to="/register">Register</Link> :
                <a className='link' onClick={logout}>Logout</a>
                } */}
                
                
            </ul>
        </nav>
    </div>
  )
}
