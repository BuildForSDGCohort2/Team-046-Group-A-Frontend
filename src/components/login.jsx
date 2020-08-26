import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from './f1.png'
class Login extends Component {
  state={
    email:'',
    password:'',
    error:''
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('https://farmconnect-backend.herokuapp.com/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
          (!res.data.error)?((localStorage.setItem('token', res.data))):this.setState({error:res.data.error})
          if(!res.data.error){
            window.location='/'
          }
        })
        .catch(err => {
            console.log(err)
        })
  }
  render(){
    return(
      <div class="hold-transition login-page container" style={{width:'100%'}}>
<div class="login-box mx-auto container">
  <div class="card">
  <div class="login-logo card-header m-4">
  <img className="img-fluid img-thumbnail" src={logo} alt="" />
  </div>
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>
      {
        this.state.error!=='' ?
        <div class='alert alert-danger text-center'>{this.state.error}</div>:<div></div>
      }
      <form onSubmit={this.handleSubmit}>
        <div class="input-group mb-3">
          <input onChange={this.handleChange} name='email' type="email" class="form-control" placeholder="Email"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input onChange={this.handleChange} name='password' type="password" class="form-control" placeholder="Password"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>

            <button type="submit" class="btn btn-outline-primary btn-block"><i className='fa fa-sign-in-alt'/>{' '}Sign In</button>
      </form>




      <p class="mb-0">
        <Link to="/signup" class="text-center">Sign Up</Link>
      </p>
    </div>
  </div>
</div>


</div>

    )
  }
}
export default Login
