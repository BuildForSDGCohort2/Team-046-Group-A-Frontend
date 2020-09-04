import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Crops,Animals} from './crops'
import postImage from '../post.png'
import $ from 'jquery'
import jwt_decode from 'jwt-decode'
import {getPosts} from '../actions/candidateAction'
import { Link } from 'react-router-dom'
import kR from '../unnamed.jpg'
import axios from 'axios'
class Post extends Component {
  componentDidMount() {
    this.props.getPosts()
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

          </div>
        )
      })
    ):(
      <div className='bg-danger mx-auto col text-center'>Upload Section Empty {'   '}<i className='fa-fw fa-spin fa fa-ban'/></div>
    )
    return (
      <div class='col-md-7 mx-auto'>

  {POSTS}

      </div>
    );
  }
}
Post.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    posts: state.posts
  }
}
export default connect(mapStateToProps,{getPosts})(Post);
