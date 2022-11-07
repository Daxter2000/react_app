import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewCompany from './company/NewCompany';
import Clients from './clients/Clients';



const  Home = (props) => {

    useEffect(() =>{
        props.checkCompany()
    },[])

    const navigate = useNavigate()
    
    const handleNewCompany = () => {
        navigate("/dashboard")
    }
        return (
        <div>
            <div>

                {
                    props.userStatus === "LOGGED_IN" ?
                     <div>
                        
                        {props.company === "" ? 
                            <NewCompany  handleNewCompany={handleNewCompany}/>
                        :
                        <Clients />
                        }
                     </div>                     
                     :
                     <button onClick={() => navigate("/login")}> Login</button>
                }
               

            </div>
        </div>
        );
    
}

export default Home;