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
  componentDidMount() {
    console.log(this.props)
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
    this.props.match.path==='/farmer_login'?(
    axios.post('http://farmconnect-backend/farmer/login', {
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
  ):(
    axios.post('http://farmconnect-backend/consumer/login', {
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
    )
  }
  render(){
    return(

      <div data-dismiss='modal' class="hold-transition register-page">
      <div class="w-full container mx-auto p-6">

		<div class="w-full flex items-center justify-between">
			<Link class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to='/'>
				 <svg class="h-8 fill-current text-indigo-600 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"></path></svg> Farm Connect
			</Link>
		</div>

	</div>
      <div class="register-box">

      <div class="card">
      <div class="card-body register-card-body">
      <img id="image" alt='' src={logo} style={{width:'100px',height:'100px'}} className='mx-auto d-block img-thumbnail img-fluid'/>
      <br/>
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
