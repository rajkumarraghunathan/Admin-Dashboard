import React from 'react'

const Register = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor: '#4e73df', height: '100vh', width: '100%' }}>
            <div class="container">
                <div class="card o-hidden border-0 shadow-lg">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group row my-3">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div class="form-group my-3">
                                            <input type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                                        </div>
                                        <div class="form-group row my-3">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="password" class="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                                            </div>
                                        </div>
                                        <div className='d-grid'>
                                            <a href="/" class="btn btn-primary form-control-user">
                                                Register Account
                                            </a>
                                        </div>
                                        <hr />
                                        <div class="d-grid gap-2">
                                            <button href="/" class="btn btn-danger form-control-user" type="button">Register with Google</button>
                                            <button href="/" class="btn btn-facebook form-control-user" type="button">Register with Facebook</button>
                                        </div>
                                    </form>
                                    <hr />
                                    <div class="text-center">
                                        <a class="small" href="/Forget_password">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="/Login">Already have an account? Login!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register