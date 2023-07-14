
import axios from "axios"
import {createContext, useState ,useContext} from "react"
import { Props, authContext } from "../utils/types"





const Authcontext = createContext<authContext | null>(null)

export const AuthProvider = ({children}:Props) =>{
    const [Authenticate, setAuthenticate] = useState(false)
    // const [User, setUser] = useState<Auth[]>([])

    const url = 'https://todoapi29.pythonanywhere.com/'
    const loginuser = async (Username:string,Password:string) =>{
        await axios.post(url+"api/login/",{
            username: Username,
            password:Password
        }).then(async (res)=>{
            // await localStorage.removeItem('access-token')
            console.log(res.data['access']);
            const token = await localStorage.setItem('access-token',res.data['access'])
            await localStorage.setItem('refresh-token',res.data['refresh'])
            setAuthenticate(true)
            if (token != null) {
                
            }
            
        })
    }

    const logout = async () =>{

        const token = `Bearer ${localStorage.getItem('access-token')}`
        try {
          await axios.get(url+"api/logout/",{
            headers:{
                'Authorization': token
            }
          }).then(()=> {
            localStorage.clear()
            const token2 = `Bearer ${localStorage.getItem('access-token')}`
            setAuthenticate(false)
            if (token2 == null) {
                
            }
           
          })
        } catch (error) {
            console.log(error);
        }
      } 
      const context = {
        Authenticate,
        loginuser,
        logout
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

