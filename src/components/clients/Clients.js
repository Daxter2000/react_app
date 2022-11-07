import React, { useState, useEffect, Fragment } from 'react'
import axios from "axios";
import ClientsTable from './ClientsTable';
import ClientNewForm from './forms/ClientNewForm';

const Clients = (props) => {

    const [clients, setClients] = useState([])
    const [client, setClient] = useState({})
    const [newUser, setnewUser] = useState(false)
    
    useEffect(() => {
        setClient({
             names: "",
             ap_pat: "",  
             ap_mat:"",
             telefono: "",
             canal: "",
             calle: "",
             colonia: "",
             numero:"",
             referencias:"",
             notas: "" 
            })
        
        handleNewUser()
        
    },[newUser])

    const handleNewUser = () => {
        axios.get("http://localhost:3001/clients/get", {withCredentials:true}).
        then( r => {
            setClients(r.data.response.data)
            console.log("respuesta", r.data.response.data)
            
        }).catch(e => {
            console.log("error al obtener clientes" ,e)
        })

        setnewUser(false)
    }


    const handleSubmit =(e) => {
        axios.post("http://localhost:3001/clients/create",{
            client: {
                names: client.names,
                ap_pat: client.ap_pat,  
                ap_mat: client.ap_mat,
                telefono: client.telefono,
                canal: client.canal,
                calle: client.calle,
                colonia: client.colonia,
                numero: client.numero,
                referencias: client.referencias,
                notas: client.notas, 
            }
        },{withCredentials: true}).then(
            res => {
                console.log("creation if client", res)
                setnewUser(true)
            })
            .catch(
                e=> {
                    console.log("creation error", e)
                })

        e.preventDefault()
    }

    const handleChange =(e) => {

    setClient(Object.assign({}, client, {[e.target.name]: e.target.value}))
    e.preventDefault()

    }

    return (
       <div>
           <h2>Clientes</h2>
           {
               clients ? 
               <Fragment >
                   <ClientsTable clients={clients}/> 
                   <ClientNewForm   client={client} handleChange={handleChange} handleSubmit={handleSubmit} />
               </Fragment>
               
               
               :
               <h1> No hay clientes registrados</h1>
           }
           
       </div> 
    )

}

export default Clients