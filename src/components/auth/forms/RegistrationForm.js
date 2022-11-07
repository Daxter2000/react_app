import React from 'react';

const RegistrationForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit} >
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    
                    <input type="email" 
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        value={props.user.email || ""} 
                        onChange={props.handleChange} 
                        aria-describedby="emailHelp"
                        required 
                    />
                    <div id="emailHelp" className="form-text">Nunca compartas tu email con nadie mas.</div>
                </div>


                <div className="mb-3">
                    <label  className="form-label">Contraseña</label>
                    <input type="password" 
                        name="password"
                        placeholder="Contraseña"
                        className="form-control"
                        value={props.user.password || ""} 
                        onChange={props.handleChange} 
                        required 
                        id="exampleInputPassword1"
                        />
                </div>

                <div className="mb-3">
                    <label  className="form-label">Confirmacion de contraseña</label>
                    <input 
                        type="password" 
                        name="password_confirmation"
                        placeholder="Confirmación de contraseña"
                        className="form-control"
                        value={props.user.password_confirmation|| ""} 
                        onChange={props.handleChange} 
                        required 
                        id="exampleInputPassword2"
                        />
                </div>

                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    )
}
export default RegistrationForm