import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Crops,Animals} from './crops'
import postImage from '../post.png'
import $ from 'jquery'
import jwt_decode from 'jwt-decode'
import {getUploads,addPost,updatePost,deletePost} from '../actions/candidateAction'
import { Link } from 'react-router-dom'
import kR from '../unnamed.jpg'
import axios from 'axios'
class Uploads extends Component {
  state={
    category:'',
    image:'no image',
    description:'',
    price:0,
    id:''
  }

  componentDidMount() {
    this.props.getUploads()
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
}
handleChange=e=> {
  this.setState({[e.target.name]:e.target.value})
}
handleSubmit=e=>{
  e.preventDefault()
  const decode = jwt_decode(localStorage.token)
  const {category, price, description,image} = this.state
  const post ={
      category,
      price,
      description,
      image,
      post_id:decode._id,
      fullname: decode.lastname+' '+decode.firstname
  }
  this.props.addPost(post)
}
postDetail=(id) => {
  axios.get(`/farmer/post/${id}`)
    .then(res => {
      this.setState({
        category: res.data.category,
        image:res.data.image,
        description:res.data.description,
        price:res.data.price,
        id:res.data._id
      })
    })
}
deletePost=id => {
  this.props.deletePost(id)
}
updatePost=e=> {
  e.preventDefault()
  const {category, price,description,image,id} = this.state
  const post ={
      category,
      price,
      description,
      image
  }
  this.props.updatePost(id,post)
  window.location= '/uploads'
}
  render() {
    const {posts} = this.props.posts
    const POSTS = posts.length ? (
      posts.map(post=>{
        return(
          <div class="card" key={post._id}>
          <div class='card-header'>
          <h3>
          {post.fullname}
          </h3>
          </div>
          <div className='container'>
          {
            post.image==='no image' ?
            <img src={kR} className='img-fluid card-img-top container d-block mx-auto img-thumbnail' alt="" style={{width:'75%'}}/>
            :
            <img src={post.image} className='img-fluid card-img-top container d-block mx-auto img-thumbnail' alt="" />
          }
          </div>
          <div class="card-body">
          <br/><hr/>
          <p>Category: {post.category}</p>
          <p>Price: #{post.price}</p>
          <p>Description: {post.description}</p>
          </div>
          <div className='card-footer'>
          <div className='row'>
          <div className='col'>
          <Link onClick={() => {
            this.postDetail(post._id)
          }} className='btn btn-block btn-outline-info' data-toggle='modal' data-target='#postDetail'>
          Edit
          </Link>
          </div>
          <div className='col'>
            <button type="button" onClick={() => {
              this.deletePost(post._id)
            }} className='btn btn-block btn-outline-danger'>Delete</button>
          </div>
          </div>
          </div>
          </div>
        )
      })
    ):(
      <div className='bg-danger mx-auto col text-center'>Upload Section Empty {'   '}<i className='fa-fw fa-spin fa fa-ban'/></div>
    )
    return (
      <div class='col-md-7 mx-auto'>
      <div class="modal fade" id="postDetail">
<div class="modal-dialog">
  <div class="modal-content">

    <div class="modal-header">
      <h4 class="modal-title">Create Post</h4>
      <button type="button" class="close" data-dismiss="modal">&times;</button>
    </div>
    <div class="modal-body">
    <form onSubmit={this.updatePost}>
    {
      (this.state.image==='no image')?(
        <div className='form-group'>
        <img id="image" alt='' src={postImage} style={{width:'100px',height:'100px'}} className='mx-auto d-block img-thumbnail img-fluid' onClick={this.uploadFile}/>
        <input onChange={this.uploadImage} type="file" id="newImage" name='image' style={{display: "none"}}/>
        </div>
      ):(
        <div className='form-group'>
        <img id="image" alt='' src={this.state.image} style={{borderRadius:"50%",width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={this.uploadFile}/>
        <input onChange={this.uploadImage} type="file" id="myfile" name='image' style={{display: "none"}}/>
        </div>
      )
    }
    <div class="form-group mb-3">
      <label>Category</label>
      <select class='form-control custom-select' name='category' onChange={this.handleChange} value={this.state.category}>
        {
          Crops.map(crop=>{
            return(
              <option>{crop.name}</option>
            )
          })
        }
        {
          Animals.map(animal=>{
            return(
              <option>{animal.name}</option>
            )
          })
        }
      </select>
    </div>
    <div class="form-group mb-3">
    <label>Price</label>
    <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">#</span>
  </div>
  <input type="number" name='price' class="form-control" placeholder="Price" onChange={this.handleChange} value={this.state.price}/>
</div>
    </div>
    <div class="form-group mb-3">
    <label for="comment">Description:</label>
<textarea class="form-control" name='description' onChange={this.handleChange} value={this.state.description} rows="5" id="comment"></textarea>
    </div>
    <input type="submit" class='btn btn-outline-primary btn-block' value="Upload" />
      </form>
    </div>
  </div>
</div>
</div>
        <button type="button" class='btn btn-outline-info btn-block' data-toggle='modal' data-target='#newUpload'><i class='fa fa-fw fa-upload'/>{'  '} Create Post</button>
        <br/>
        <div class="modal fade" id="newUpload">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Create Post</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
      <form onSubmit={this.handleSubmit}>
      {
        (this.state.image==='no image')?(
          <div className='form-group'>
          <img id="image" alt='' src={postImage} style={{width:'100px',height:'100px'}} className='mx-auto d-block img-thumbnail img-fluid' onClick={this.uploadFile}/>
          <input onChange={this.uploadImage} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        ):(
          <div className='form-group'>
          <img id="image" alt='' src={this.state.image} style={{borderRadius:"50%",width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={this.uploadFile}/>
          <input onChange={this.uploadImage} type="file" id="myfile" name='image' style={{display: "none"}}/>
          </div>
        )
      }
      <div class="form-group mb-3">
        <label>Category</label>
        <select class='form-control custom-select' name='category' onChange={this.handleChange}>
          {
            Crops.map(crop=>{
              return(
                <option>{crop.name}</option>
              )
            })
          }
          {
            Animals.map(animal=>{
              return(
                <option>{animal.name}</option>
              )
            })
          }
        </select>
      </div>
      <div class="form-group mb-3">
      <label>Price</label>
      <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">#</span>
    </div>
    <input type="number" name='price' class="form-control" placeholder="Price" onChange={this.handleChange}/>
  </div>
      </div>
      <div class="form-group mb-3">
      <label for="comment">Description:</label>
  <textarea class="form-control" name='description' onChange={this.handleChange} rows="5" id="comment"></textarea>
      </div>
      <input type="submit" class='btn btn-outline-primary btn-block' value="Upload" />
        </form>
      </div>
    </div>
  </div>
</div>
  {POSTS}

      </div>
    );
  }
}
Uploads.propTypes = {
  getUploads: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    posts: state.posts
  }
}
export default connect(mapStateToProps,{getUploads,addPost,updatePost,deletePost})(Uploads);
