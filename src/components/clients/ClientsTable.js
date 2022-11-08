
const ClientsTable = (props) => {

    return (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre completo</th>
                <th scope="col">Calle</th>
                <th scope="col">Colonia</th>
                <th scope="col">Numero</th>
                <th scope="col">Telefono</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
            { props.clients.map((client) => (
                   <tr key={client.id}>
                   <td>{client.id}</td>
                   <td>{client.attributes.complete_name}</td>
                   <td>{client.attributes.colonia}</td>
                   <td>{client.attributes.calle}</td>
                   <td>{client.attributes.numero}</td>
                   <td>{client.attributes.telefono}</td>
                   <td>
                       <button type="button" className="btn btn-primary btn-sm">Primary</button>
                       <button type="button" className="btn btn-secondary btn-sm">Secondary</button>
                       <button type="button" className="btn btn-success btn-sm">Success</button>
                    </td>
                   </tr>
               )) 
              
              
              }
                
            </tbody>
        </table>
    )
}
export default ClientsTable