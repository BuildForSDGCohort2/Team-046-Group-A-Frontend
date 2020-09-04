import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from './f4.png'
import {Crops,Animals} from './crops'
import $ from 'jquery'
import kR from '../unnamed.png'
class signUp extends Component {
  state={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    password2:'',
    crops:[],
    animals:[],
    status:'New Registration',
    show:false,
    loading: false,
    image:'no image'
  }
  handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }


     handleCrop=e=>{
       var crop = e.target.value
       var checked = e.target.checked
       var tool = this.state.crops.filter(crop=>crop.crop!==e.target.value)
       checked===false ? this.setState({crops:[...tool]}) :this.setState({crops:[...this.state.crops,{crop:crop,checked:checked}]})
     }
     handleAnimal=e=>{
       var animal = e.target.value
       var checked = e.target.checked
       var tool = this.state.animals.filter(animal=>animal.animal!==e.target.value)
       checked===false ? this.setState({animals:[...tool]}) :this.setState({animals:[...this.state.animals,{animal:animal,checked:checked}]})
     }
     uploadFile=()=>{
    $('#newImage').click()
  }
  uploadImage=async e =>{
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'jewbreel')
    this.setState({loading:true})
    const res = await fetch('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
    {
      method:'POST',
      body:data
    }
  )
  const file = await res.json()
  this.setState({image:file.secure_url})
  this.setState({loading:false})
  console.log(file.secure_url)
}
     handleSubmit=(e)=>{
       e.preventDefault()
       const {firstname,lastname,username,email,password,password2,crops,image,animals} = this.state
       const farmer={
         firstname,
         lastname,
         username,
         email,
         password,
         crops,
         image,
         animals
       }
       const consumer={
         firstname,
         lastname,
         username,
         email,
         password,
         image
       }
       if (password!==password2){
         this.setState({
           status:'Passwords do not match'
         })
       }else{
         this.props.match.path==='/farmer_signUp' ? (
         axios.post('/farmer/signup',farmer)
          .then(res=>{
            res.data.error ?
            this.setState({status:res.data.error})
            :
            this.props.history.push('/farmer_login')
          })
        ) : (
          axios.post('/consumer/signup',consumer)
           .then(res=>{
             res.data.error ?
             this.setState({status:res.data.error})
             :
             this.props.history.push('/consumer_login')
           })
        )
       }

     }

  render(){

    return(
      <div class="hold-transition register-page">
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
      <p class="login-box-msg alert alert-info">{this.state.status}</p>
<br/>
      <form onSubmit={this.handleSubmit}>
      {
        (this.state.image==='no image')?(
          <div className='form-group'>
          <img id="image" alt='' src={kR} style={{borderRadius:"50%",width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={this.uploadFile}/>
          <input onChange={this.uploadImage} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        ):(
          <div className='form-group'>
          <img id="image" alt='' src={this.state.image} style={{borderRadius:"50%",width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={this.uploadFile}/>
          <input onChange={this.uploadImage} type="file" id="myfile" name='image' style={{display: "none"}}/>
          </div>
        )
      }
      <div class='row'>
      <div class='col'>
      <div class="input-group mb-3">
        <input onChange={this.handleChange} name='firstname' type="text" class="form-control" placeholder="First Name"/>
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-user"></span>
          </div>
        </div>
      </div>
      </div>
      <div class='col'>
      <div class="input-group mb-3">
      <input onChange={this.handleChange} name='lastname' type="text" class="form-control" placeholder="Last Name"/>
      <div class="input-group-append">
      <div class="input-group-text">
      <span class="fas fa-user"></span>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div class='row'>
      <div class='col'>
      <div class="input-group mb-3">
        <input onChange={this.handleChange} name='email' type="email" class="form-control" placeholder="Email"/>
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-envelope"></span>
          </div>
        </div>
      </div>
      </div>
      <div class='col'>
      <div class="input-group mb-3">
        <input onChange={this.handleChange} name='username' type="text" class="form-control" placeholder="Username"/>
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-user"></span>
          </div>
        </div>
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
        <div class="input-group mb-3">
          <input onChange={this.handleChange} name='password2' type="password" class="form-control" placeholder="Retype password"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        {
          this.props.match.path==='/farmer_signUp' ?
          (
            <React.Fragment>
            {
              this.state.crops.length ?
              <button type="button" className='btn btn-outline-success btn-block' data-toggle="modal" data-target="#cropName"><i className='fa fa-list-alt'/>{'  '} Change Selected Crop</button>
              :
              <button type="button" className='btn btn-outline-success btn-block' data-toggle="modal" data-target="#cropName"><i className='fa fa-list-alt'/>{'  '} Select Crop Type</button>
            }
            <div class="modal fade" id="cropName">
              <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                <div class="modal-header">
            <button type="button" class="close btn-outline-success btn" data-dismiss="modal"><i class='fa fa-check'/>Done</button>
          </div>
                  <div class="modal-body p-0">
                    <div class="card shadow border-0 mb-0">
                    <div className='card-header'>
                        <img className="img-thumbnail img-fluid mx-auto d-block" src={logo} alt="" />
                        </div>
                      <div class="card-body px-lg-5 py-lg-5 ">
                        <div class="text-center text-muted mb-4">
                          <small>Choose Your Crop Name</small>
                        </div>
                        <div class='input-group mb-3'>
                        <ul className='tags'>
                        {
                          Crops.map(crop=>{
                            return(
                            <div className='tag tag__choice'>
                            <input onChange={this.handleCrop} type="checkbox" name="test" value={crop.name} />
                            <label>{crop.name}</label>
                            </div>
                            )
                          })
                        }
                        </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            {
              this.state.animals.length ?
              <button type="button" className='btn btn-outline-success btn-block' data-toggle="modal" data-target="#animalType"><i className='fa fa-list-alt'/>{'  '} Change Selected Animal</button>
              :
              <button type="button" className='btn btn-outline-success btn-block' data-toggle="modal" data-target="#animalType"><i className='fa fa-list-alt'/>{'  '} Select Animal Type</button>
            }
            <div class="modal fade" id="animalType">
              <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                <div class="modal-header">
            <button type="button" class="close btn-outline-success btn" data-dismiss="modal"><i class='fa fa-check'/>Done</button>
          </div>
                  <div class="modal-body p-0">
                    <div class="card shadow border-0 mb-0">
                    <div className='card-header'>
                        <img className="img-thumbnail img-fluid mx-auto d-block" src={logo} alt="" />
                        </div>
                      <div class="card-body px-lg-5 py-lg-5 ">
                        <div class="text-center text-muted mb-4">
                          <small>Choose Your Animal Type</small>
                        </div>
                        <div class='input-group mb-3'>
                        <ul className='tags'>
                        {
                          Animals.map(animal=>{
                            return(
                            <div className='tag tag__choice'>
                            <input onChange={this.handleAnimal} type="checkbox" name="animal" value={animal.name} />
                            <label>{animal.name}</label>
                            </div>
                            )
                          })
                        }
                        </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            {this.state.crops.length ?
            <div class='input-group mb-3'>
            <ul className='tags'>
            {
              this.state.crops.length ?
              this.state.crops.map(crop=>{
                return(
                <div className='tag tag__choice'>
                <input disabled checked={crop.checked} type="checkbox" name="test" value={crop.crop} />
                <label className='text-white'>{crop.crop}</label>
                </div>
                )
              }):''
            }
            {
              this.state.animals.length ?
              this.state.animals.map(animal=>{
                return(
                <div className='tag tag__choice'>
                <input disabled checked={animal.checked} type="checkbox" name="test" value={animal.animal} />
                <label className='text-white'>{animal.animal}</label>
                </div>
                )
              }):''
            }
            </ul>
            </div>
            :<div></div>
            }
            {
              (this.state.crops.length && this.state.animals.length) ?
              <button type="submit" class="btn btn-primary btn-block"><i className='fa fa-user-plus'/>{' '}Register</button>
              :
              <button type="submit" disabled class="btn btn-primary btn-block"><i className='fa fa-user-plus'/>{' '}Register</button>
            }
            </React.Fragment>
          ) : (
            <button type="submit" class="btn btn-primary btn-block"><i className='fa fa-user-plus'/>{' '}Register</button>
          )
        }

      </form>



      <Link to="/" class="text-center">Sign In</Link>
    </div>
  </div>
</div>

</div>
    )
  }
}
export default signUp
