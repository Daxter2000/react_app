
const ClientNewForm = (props) => {
    return(
        <div className="container">
        <form onSubmit={props.handleSubmit} >
            <div className="mb-3">

                <label className="form-label">Nombre completo</label>
                
                <input type="text" 
                    id="exampleInputEmail1"
                    name="names"
                    placeholder="Nombre completo"
                    className="form-control"
                    value={props.client.names || ""} 
                    onChange={props.handleChange} 
                    required 
                />
            </div>


            <div className="mb-3">
                <label  className="form-label">Apellido paterno</label>
                <input type="text" 
                    name="ap_pat"
                    placeholder="Apellido paterno"
                    className="form-control"
                    value={props.client.ap_pat || ""} 
                    onChange={props.handleChange} 
                    required 
                    />
            </div>

            <div className="mb-3">
                <label  className="form-label"> Apellido materno</label>
                <input 
                    type="text" 
                    name="ap_mat"
                    placeholder="Apellido materno"
                    className="form-control"
                    value={props.client.ap_mat|| ""} 
                    onChange={props.handleChange}  
                    />
            </div>

            <div className="mb-3">
                <label  className="form-label"> Telefono</label>
                <input 
                    type="number" 
                    name="telefono"
                    placeholder="Telefono"
                    className="form-control"
                    value={props.client.telefono|| ""} 
                    onChange={props.handleChange}  
                    />
            </div>

            <div className="mb-3">
                <label  className="form-label"> Canal de contacto</label>
                <input 
                    type="text" 
                    name="canal"
                    placeholder="Canal de contacto"
                    className="form-control"
                    value={props.client.canal|| ""} 
                    onChange={props.handleChange}  
                    />
            </div>

            <div className="mb-3">
                <label  className="form-label"> Calle</label>
                <input 
                    type="text" 
                    name="calle"
                    placeholder="Calle del domicilio"
                    className="form-control"
                    value={props.client.calle|| ""} 
                    onChange={props.handleChange}  
                    />
            </div>

            <div className="mb-3">
                <label  className="form-label"> Colonia</label>
                <input 
                    type="text" 
                    name="colonia"
                    placeholder="Colonia"
                    className="form-control"
                    value={props.client.colonia|| ""} 
                    onChange={props.handleChange}  
                    />
            </div>

            <div className="mb-3">
                <label  className="form-label"> Numero de casa</label>
                <input 
                    type="number" 
                    name="numero"
                    placeholder="Numero de casa"
                    className="form-control"
                    value={props.client.numero|| ""} 
                    onChange={props.handleChange}  
                    />
            </div>

            <div className="mb-3">
                <label  className="form-label"> Referencias</label>
                <input 
                    type="text" 
                    name="referencias"
                    placeholder="Referencias"
                    className="form-control"
                    value={props.client.referencias|| ""} 
                    onChange={props.handleChange}  
                    />
            </div>

            <div className="mb-3">
                <label  className="form-label"> Notas</label>
                <input 
                    type="text" 
                    name="notas"
                    placeholder="Notas"
                    className="form-control"
                    value={props.client.notas|| ""} 
                    onChange={props.handleChange}  
                    />
            </div>

            <button type="submit" className="btn btn-primary">Registrar nuevo cliente</button>
        </form>
    </div>
    )

}
export default ClientNewForm