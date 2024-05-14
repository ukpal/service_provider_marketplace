import React from 'react'


const AdminLogin = () => {
    return (
        <div className="card w-30 text-bg-white" style={{backgroundColor:'#f5f5f5'}}>
            <div className="card-header">
                Admin Login
            </div>
            <div className="card-body">
                <form className="row g-3">
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder='enter your email address'/>
                    </div>
                    
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AdminLogin