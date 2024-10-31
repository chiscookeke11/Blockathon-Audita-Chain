import React from 'react'
import { image } from '../images';
import './projectManagementMain.css'

const ProjectManagementMain = () => {
  return (
    <div className='ProjectManagementMain' >
        <div className="text"><h1>Project Management</h1></div>


        <div className="center">

            <div className="left-side">
                <img src={image.banner_img} alt="" />
                <p>
                    <span>Unlock transparency and trust for your project</span><br/>
Are you tired of unclear project tracking and manual auditing processes?,

By registering your project with Auditablock Dapp you will gain unparalled benefits
Immutable blockchain record-keeping
real time tracking and automated auditing
enhanced transparency and trust
improved collaboration and reduced costs

Join the Auditablock community and experience secure project management

Register your project now!!!
Learn more about Auditablock dapp</p>
            </div>


            <div className="right-side">
                <form action="">
                    <span className='heading'>
                        <h1>Register for a Project Account</h1>
                        <p>Register your project account to get started with our services</p>
                    </span>

                    <div className="form-main">

                        

                           <div className="email-address">
                            <label for="email" >Email Address</label>
                            <input type="email" required id='email' />
                           </div>

                           <div className="login-details">

                            <span className="username">
                                <label for="username">Username</label>
                                <input type="username" id='username' required/>
                            </span>

                         

                            <span className="Password">
                                <label for="Password">Password</label>
                                <input type="Password" id='Password' required/>
                            </span>

                            <span className="Confirm Password">
                                <label for="confirmPassword">Confirm Password</label>
                                <input type="password" id='confirmPassword' required/>
                            </span>
                           </div>

                           <div className="checkbox">
                            <input type="checkbox" name="terms" id="terms" />
                            <label for="terms">I hereby agree to terms of service, privacy policy, and user agreement</label>
                           </div>

                          <div className="button-holder">
                            <button>Sign up for an account</button>
                          </div>









                           </div>

                </form>
            </div>


        </div>
    </div>
  )
}

export default ProjectManagementMain