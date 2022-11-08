import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from './forms/RegistrationForm';

const Registration= (props) => {

        const navigate = useNavigate()
        const [user, setUser] = useState({})
        //const [registrationErrors, setRegistrationErrors] = useState("")

        useEffect(()  =>{

            setUser({email:"",password:"",password_confirmation:""})
        },[])

        const handleChange = (e) => {
            e.preventDefault()
            setUser(Object.assign({}, user, {[e.target.name]: e.target.value}))

          }

        const handleSubmit = (e) => {
            
            axios.post("http://localhost:3001/auth/registrations"
            , {
                user: {
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation
                }
            },
            {withCredentials: true}
            )
            .then(response => {
                if (response.data.status ==='created'){
                    console.log("creadteddd")
                    props.handleSuccesfullAuth(response.data)
                    navigate("/home")
                }
            })
            .catch(error => {
                console.log("registration error", error.code)
            })

            e.preventDefault();

        }

          return ( 
            <div className="container login_container">
                
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 login_container_row_col">
                        <h1>Registrarse</h1>
                        <RegistrationForm   user={user} handleSubmit={handleSubmit} handleChange={handleChange}/>
                    </div>
                    <div className="col-3"></div>
                    
                </div>

                
            </div>
         );

    }

export default Registration;