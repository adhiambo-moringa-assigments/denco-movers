import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export const AuthContext = createContext();

export default function AuthProvider({children}) 
{
    const navigate = useNavigate()
    const [user, setUser] = useState()

    const [change, setOnChange] = useState(false)
    // login
    const login = (email, password) =>{
        fetch("/login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        }
        )
        .then(res=>res.json())
        .then(response=>{
            if(response.error){
                // console.log(response.error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.error,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }else{
                // setUser(response)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'LoggedIn successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate("/")
            }
        })
    }

     // Register
   const register = (name, email, password ) =>{

        fetch("http://127.0.0.1:3000//signup",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            name,email, password
            })

        })
        .then(res=>res.json())
        .then(response=>{
            if(response.error){
                // console.log(response.error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.error,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }else{
                // setUser(response)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registered successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate("/login")
            }
        }
        )



    }

     // Logout
     const logout = () =>{
        fetch("/logout",{
            method: "DELETE"
        })
        .then(response=>{
            // 
            setOnChange(!change)

            setUser()
            
              navigate("/login")
        })
    }
   
    // check if user is logged in
    useEffect(()=>{
        fetch("http://127.0.0.1:3000/loggedin",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        }
        )
        .then(res=>res.json())
        .then(response=>{
            setUser(response)
        }
        )
    }, [change])

    const contextData = {
        user,
        login, 
        register, 
        logout
    }

  return (
    <>
     <AuthContext.Provider value={contextData}>
        {children}
     </AuthContext.Provider>
    </>
  )
}