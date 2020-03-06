import React, { useState, Component } from 'react'
// import {emailRegex, nameRegex, passwordRegex} from './utils/validations'//put one dot here 
// import {stateMapper} from '../redux/store/store';
// import {connect} from 'react-redux';
import Sup from './Sup.scss';
class Login extends Component {
    constructor(){
    super()
    this.state = {
    email: '',
    password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        console.log(this.state)
    this.setState({[e.target.name]: e.target.value})    
    }
    onSubmit(e){
    e.preventDefault()
    
    const user = {
    email: this.state.email,
    password: this.state.password
    }
    // login(user).then(res => {
    // if(res){
    // this.props.history.push('')
    //  }   
    // })    
    }
    render(){
    
    return (
            <div className="back">
            <div className="box">
            <div className="imgBx">
            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" className="img"  alt=""/>
            </div>
            <div className="container">
            <form className="form-container" noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
            <h2 className="content-center">Login</h2>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" 
             className="form-control" 
             id="exampleInputEmail1" 
             aria-describedby="emailHelp" 
             placeholder="Enter email"
             value={this.state.email} 
             name="email"
             onChange={this.onChange}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.onChange}
            />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="submit" className="btn btn-warning">SignUp</button>
            </form>
            </div> 
            </div>
            </div>
    )
    }
}
export default  Login
