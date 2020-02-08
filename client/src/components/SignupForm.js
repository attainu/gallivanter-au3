import React, { useState } from 'react'
import {emailRegex, nameRegex, passwordRegex} from '../utils/validations'

const formValid = (formErrors, formData) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(formData).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  
function SignupForm() {
    const userData = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      cPass: null
    }
    const errors = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cPass: ""
    }

    const [formData, setFormData] = useState(userData);
    const [formErrors, setFormErrors] = useState(errors);
    const [passShow, setPassShow] = useState({ hidden: true })
    const [toggleBtn, setToggleBtn] = useState(false)

    const toggleShow = () => {
        setPassShow({...passShow, hidden: !passShow.hidden});
        setToggleBtn(!toggleBtn);
    }

    const handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(formErrors, formData)) {
          console.log(`
            --SUBMITTING--
            First Name: ${formData.firstName}
            Last Name: ${formData.lastName}
            Email: ${formData.email}
            Password: ${formData.password}
          `);
        } else {
          alert("FORM INVALID");
        }
      };
    const handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = {...errors};

        switch(name){
            case "firstName":
                formErrors.firstName = 
                nameRegex.test(value) ? "" : "minimum 2 characters required";
                break;
            case "lastName":
                formErrors.lastName = 
                nameRegex.test(value) ? "" : "minimum 2 characters required";
                break; 
            case "email":
                formErrors.email = 
                emailRegex.test(value) ? "" : "invalid email address";
                break;
            case "password":
                formErrors.password = 
                passwordRegex.test(value) ? "" : `1. Minimum eight characters,\n 
                                                  2. At least one uppercase letter, \n
                                                  3. One lowercase letter,\n 
                                                  4. One number and \n
                                                  5. One special character required\n`;
                break;   
            case "cPass":
                formErrors.cPass = 
                value !== formData.password ? "password did not match": "";
                break;
            default:
                break;
        }
        setFormData({...formData, [name]:value});
        setFormErrors({...formErrors});
    }  
    return (
            <div className='row signup-form-wrapper p-md-2 m-md-5 bg-white'>
                <div className='col-md-6 p-5'>
                    <h1 className='font-weight-bolder'>Sign Up</h1><br></br>
                    <form onSubmit = {handleSubmit}>
                        <div className='row'>
                            <div className='col-md-6'>
                               <div className='form-group'>
                                <label htmlFor='firstName'><i className="icon ion-md-person"></i></label>
                                <input 
                                className = {formErrors.firstName.length > 0 ? "error": null}
                                type='text' 
                                name='firstName'
                                placeholder='Your First Name'
                                onChange={handleChange}
                                ></input>
                                {formErrors.firstName.length > 0 && (
                                   <span className="errorMessage">{formErrors.firstName}</span>
                                )}
                               </div>

                            </div>
                            <div className='col-md-6'>
                               <div className='form-group'>
                                <label htmlFor='lastName'><i className="icon ion-md-person"></i></label>
                                <input 
                                className = {formErrors.lastName.length > 0 ? "error": null}
                                type='text' 
                                name='lastName' 
                                placeholder='Your Last Name'
                                onChange={handleChange}
                                ></input>
                                {formErrors.lastName.length > 0 && (
                                   <span className="errorMessage">{formErrors.lastName}</span>
                                )}
                               </div>

                            </div>

                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'><i className="icon ion-md-mail"></i></label>
                            <input 
                            className = {formErrors.email.length > 0 ? "error": null}
                            type='email' 
                            name='email' 
                            placeholder='Your Email'
                            onChange={handleChange}
                            ></input>
                            {formErrors.email.length > 0 && (
                                   <span className="errorMessage">{formErrors.email}</span>
                                )}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'><i className="icon ion-md-lock"></i></label>
                            <input 
                            className = {formErrors.password.length > 0 ? "error": null}
                            type = {passShow.hidden ? "password" : "text"}
                            name='password' 
                            placeholder='Password'
                            onChange={handleChange}
                            ></input>
                            <span className="password-trigger mt-4" onClick={toggleShow}>{toggleBtn? (<i className="icon ion-md-eye-off"></i>): (<i className="icon ion-md-eye"></i>)}</span>
                            {formErrors.password.length > 0 && (
                                   <span className="errorMessage">{formErrors.password}</span>
                                )}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='cPass'><i className="icon ion-md-lock"></i></label>
                            <input 
                            className = {formErrors.cPass.length > 0 ? "error": null}
                            type='password' 
                            name='cPass' 
                            placeholder='Repeat Password'
                            onChange={handleChange}
                            ></input>
                            {formErrors.cPass.length > 0 && (
                                   <span className="errorMessage">{formErrors.cPass}</span>
                                )}
                        </div>
                        <div className='form-group'>
                            <button className='btn rounded mt-1' type='submit'>Register</button>
                        </div>


                    </form>
                </div>
                <div className='col-md-6 p-md-5'>
                    <div className='container mt-md-5'>
                    <img className='embed-responsive' src='https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg' alt='signup-img'></img>
                    </div>
                    <br></br>
                    <div className='text-center m-3'>
                        <a className='text-dark' href="#"><u>I am already member</u></a>
                    </div>
                </div>
            </div>
    )
}

export default SignupForm
