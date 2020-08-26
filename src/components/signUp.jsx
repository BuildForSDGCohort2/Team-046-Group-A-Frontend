import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from './f4.png'
import {Crops} from './crops'
import $ from 'jquery'
import kR from '../unnamed.png'
class signUp extends Component {
  state={
    name:'',
    email:'',
    password:'',
    password2:'',
    crops:[],
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
       const {name, email,password,password2,crops,image} = this.state
       const user={
         name,
         email,
         password,
         crops,
         image
       }
       if (password!==password2){
         this.setState({
           status:'Passwords do not match'
         })
       }else{
         axios.post('/signup',user)
          .then(res=>{
            res.data.error ?
            this.setState({status:res.data.error})
            :
            this.props.history.push('/')
          })
       }

     }

  render(){

    return(
      <body class="hold-transition register-page">
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
        <div class="input-group mb-3">
          <input onChange={this.handleChange} name='name' type="text" class="form-control" placeholder="Full name"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
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
        <div class="input-group mb-3">
          <input onChange={this.handleChange} name='password2' type="password" class="form-control" placeholder="Retype password"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
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
        </ul>
        </div>
        :<div></div>
        }
        {
          this.state.crops.length ?
          <button type="submit" class="btn btn-primary btn-block"><i className='fa fa-user-plus'/>{' '}Register</button>
          :
          <button type="submit" disabled class="btn btn-primary btn-block"><i className='fa fa-user-plus'/>{' '}Register</button>
        }
      </form>



      <Link to="/" class="text-center">Sign In</Link>
    </div>
  </div>
</div>

</body>
    )
  }
}
export default signUp
