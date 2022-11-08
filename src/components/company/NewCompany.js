import React, {useState, useEffect} from "react"
import axios from "axios"
import NewCompanyForm from "./forms/NewCompanyForm"


const NewCompany = (props) => {
    const [company, setCompany] = useState({})

    useEffect(() => {
        setCompany({name:"", RFC: "", address: ""})
    }, [])
    
    const handleChange = (e) => {
        e.preventDefault()
        setCompany(Object.assign({},company, {[e.target.name]: e.target.value}))
    }

    const handleNewCompany = () => {
        navigate("/home")
    }
    const handleSubmit=(e) => {
        axios.post("http://localhost:3001/companies/create", 
            {
                company: 
                    {
                    name: company.name,
                    RFC: company.RFC,
                    address: company.address
                    }
            }
        ,{withCredentials:true})
        .then(response => {
            console.log(response)
            console.log(response.data.status)
            if(response.data.status === 'created'){
                props.handleNewCompany()
            }
        }).catch(e => {
            console.log("error en la creacion de company", e)
        })
        e.preventDefault()
    }

    return (

        <div className="container login_container">
                
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 login_container_row_col">
                    <h1>Crear nueva compañia</h1>
                    <NewCompanyForm  company={company} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
                <div className="col-3"></div>
                
            </div>

        
        </div>

         );
}

export default NewCompany