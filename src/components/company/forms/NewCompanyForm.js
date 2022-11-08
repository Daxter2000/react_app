import React from 'react';

const NewCompanyForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit} >
                <div className="mb-3">
                    <label  className="form-label">Compañia</label>
                    <input
                        type="text" 
                        id="company_name"
                        name="name"   
                        placeholder="Company name"
                        value={props.company.name || ""} 
                        className="form-control"
                        onChange={props.handleChange} 
                        required 
                    />

                </div>


                
 
                <div className="mb-3">
                    <label  className="form-label">Registro federal de contribuyentes</label>
                    <input 
                        type="text" 
                        name="RFC"
                        placeholder="RFC"
                        value={props.company.RFC || ""} 
                        onChange={props.handleChange} 
                        className="form-control"
                        id="RFC"
                        />
                </div>

                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input 
                        type="text" 
                        name="address"
                        placeholder="Address"
                        value={props.company.address || ""} 
                        onChange={props.handleChange} 
                        className="form-control"
                        required 
                        id="address"
                        />
                </div>

                <button type="submit" className="btn btn-primary">Registrar compañia</button>
            </form>
        </div>
    )
}
export default NewCompanyForm

