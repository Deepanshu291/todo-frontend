
import axios from "axios"
import {createContext, useState ,useContext} from "react"
import { Props, authContext } from "../utils/types"
import { Navigate } from "react-router-dom"





const Authcontext = createContext<authContext | null>(null)

export const AuthProvider = ({children}:Props) =>{
    const [Authenticate, setAuthenticate] = useState(false)
    // const navigate = useNavigate()
    // const [User, setUser] = useState<Auth[]>([])

    const url = 'https://todoapi29.pythonanywhere.com/'
    const loginuser = async (Username:string,Password:string) =>{
        await axios.post(url+"api/login/",{
            username: Username,
            password:Password
        }).then(async (res)=>{
            if (res.status == 202) {
            // console.log(res.data['access']);
            await localStorage.setItem('access-token',res.data['access'])
            await localStorage.setItem('refresh-token',res.data['refresh'])
            setAuthenticate(true)
            }
            // await localStorage.removeItem('access-token')
        })
    }

    const registeruser = async (Username:string,Password:string) =>{
        await axios.post(url+"api/register/",{
            username: Username,
            password:Password
        }).then(async (res)=>{
            if (res.status == 201) {
                {
                    console.log(res.data);
                    <Navigate to={'/login'} replace={true} />
                }
            }
            // if (res.status == 202) {
            // console.log(res.data['access']);
            // await localStorage.setItem('access-token',res.data['access'])
            // await localStorage.setItem('refresh-token',res.data['refresh'])
            // setAuthenticate(true)
            // }
            // await localStorage.removeItem('access-token')
        })
    }

    const logout = async () =>{

        const token = `Bearer ${localStorage.getItem('access-token')}`
        try {
          await axios.get(url+"api/logout/",{
            headers:{
                'Authorization': token
            }
          }).then((res)=> {
            if (res.status == 202 ) {
            localStorage.removeItem('access-token')
            const token2 = `Bearer ${localStorage.getItem('access-token')}`
            location.reload()
            setAuthenticate(false)
            }
           
           
           
          })
        } catch (error) {
            console.log(error);
        }
      } 

      const token = localStorage.getItem('access-token')
      const context = {
        Authenticate,
        loginuser,
        logout,
        registeruser,
        token
      }
    
    return(
        <Authcontext.Provider value={context}>
            {children}
        </Authcontext.Provider>
    );
    
}

export function UseAuth() {
    const authContextvalue = useContext(Authcontext);
    if (!authContextvalue) {
        throw new Error("useauth used outsife of provider");
    }

    return authContextvalue;
}

