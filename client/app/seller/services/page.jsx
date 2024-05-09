import React from 'react'

const Services = () => {
    return (
        <>
            <div className="d-flex px-2 my-4">
                <button type="button" class="btn btn-primary btn-sm me-3">All Services</button>
                <button type="button" class="btn btn-outline-primary btn-sm me-3">Active Services</button>
            </div>
            <div className="row mx-0">
                <div className="col-md-6">
                    <div className="card mb-3 border-success bg-success-subtle">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="/placeholder.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3 border-danger bg-danger-subtle">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="/placeholder.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Services