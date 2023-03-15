import React from 'react'

const Login = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor: '#4e73df', height: '100vh', width: '100%' }}>
            <div class="container" >
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form class="user">
                                                <div class="form-group my-3">
                                                    <input type="email" class="form-control form-control-user p-2" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                                </div>
                                                <div class="form-group my-3">
                                                    <input type="password" class="form-control form-control-user p-2" id="exampleInputPassword" placeholder="Password" />
                                                </div>
                                                <div class="form-group my-2">
                                                    <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                        <label class="custom-control-label mx-2" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                <div className='d-grid '>
                                                    <a href="/" class="btn btn-primary form-control-user" type='button'>Login</a>
                                                </div>
                                                <hr />
                                                <div class="d-grid gap-2">
                                                    <button href="/" class="btn btn-danger form-control-user" type="button">Login with Google</button>
                                                    <button href="/" class="btn btn-facebook form-control-user" type="button">Login with Facebook</button>
                                                </div>
                                            </form>
                                            <hr />
                                            <div class="text-center">
                                                <a class="small" href="/Forget_password">Forgot Password?</a>
                                            </div>
                                            <div class="text-center">
                                                <a class="small" href="/Register">Create an Account!</a>
                                            </div>
                                        </div>
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

export default Login