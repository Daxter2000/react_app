import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginForm from './forms/LoginForm';

const Login= (props) => {

        const navigate = useNavigate()
        const [user, setUser] = useState({})
        //const [registrationErrors, setRegistrationErrors] = useState("")

        useEffect(()  =>{

            setUser({email:"",password:""})
        },[])

        const handleChange = (e) => {
            e.preventDefault()
            setUser(Object.assign({}, user, {[e.target.name]: e.target.value}))

          }

        const handleSubmit = (e) => {
            
            axios.post("http://localhost:3001/auth/sessions"
            , {
                user: {
                    email: user.email,
                    password: user.password
                }
            },
            {withCredentials: true}
            )
            .then(response => {
                if (response.data.logged_in){
                    console.log("Iniciada sesion")
                    props.handleSuccesfullAuth(response.data)
                    navigate("/home")
                            }
            })
            .catch(error => {
                console.log("Login error", error)
            })

            e.preventDefault();

        }

          return ( 
            <div className="container login_container">
                
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 login_container_row_col">
                        <h1>Ingresar</h1>
                        <LoginForm   user={user} handleSubmit={handleSubmit} handleChange={handleChange}/>
                    </div>
                    <div className="col-3"></div>
                    
                </div>

                
            </div>
         );

    }

export default Login;