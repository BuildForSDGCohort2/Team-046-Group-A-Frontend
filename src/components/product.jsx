import React, { Component } from 'react'
import PropTypes from 'prop-types'
import kR from '../unnamed.png'
import {connect} from 'react-redux'
import {getProducts, addProduct} from '../actions/candidateAction'
import jwt_decode from 'jwt-decode'
import {Link} from 'react-router-dom'
import './style.css'
import $ from 'jquery'
class Product extends Component {
  state={
    name:'',
    price:'',
    detail:'',
    category:'',
    image:'',
    loading:false
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  componentDidMount() {
    this.props.getProducts()
  }
  uploadFile=()=>{
    $('#myfile').click()
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
addProduct=e=>{
  e.preventDefault()
  const product = {
    name:this.state.name,
    price:this.state.price,
    detail:this.state.detail,
    category:this.state.category,
    image:this.state.image===''?'no Image':this.state.image
  }
  this.props.addProduct(product)
  this.setState({
    name:'',
    price:'',
    detail:'',
    category:'Please select',
    image:''
  })
}
render(){
  const {products} = this.props.products
  const PRODUCTS = products.length ? (
    products.map(product=>{
      return(
        <div class="col-md-4 m1" key={product._id}>

        <article class="blog_item">
        <div class="blog_item_img">
        <img class="card-img rounded-0" src={product.image==='no Image'? kR : product.image} alt=""/>
        <Link to={'/product/'+product.product_id} class="blog_item_date">
        <p>#{product.price}</p>
        </Link>
        </div>

        <div class="blog_details">
        <Link class="d-inline-block" to={'/product/'+product.product_id}>
        <h2>{product.name}</h2>
        </Link>
        <p>{product.detail}</p>

        </div>
        </article>

        </div>
      )
    })
  ):(
    <div className='alert alert-info col-md-12 text-center'>No Item Up for sale</div>
  )
  return(
    <div class="main-content">
    <h3 className='text-center'>Products Page</h3>
    <section class="blog_area section-padding">
    <div class="container">
    <div class="row">
    <div class="col-md-9">
    <div class="row">
    {PRODUCTS}
    </div>
    </div>
    <div class="col-md-3">
    <form onSubmit={this.addProduct}>
    {
      (this.state.image==='')?(
        <div className='form-group'>
        <img id="image" alt='' src={kR} style={{borderRadius:"50%",width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={this.uploadFile}/>
        <input onChange={this.uploadImage} type="file" id="myfile" name='image' style={{display: "none"}}/>
        </div>
      ):(
        <img id="image" alt='' style={{width:'100px',height:'100px'}} src={this.state.image}  className='mx-auto d-block rounded-circle img-fluid'/>

      )
    }
    <div className='form-group'>
    <label>Product Name</label>
    <input type="text" name="name" onChange={this.handleChange} className='form-control' value={this.state.name} />
    </div>
    <div className='form-group'>
    <label>Price</label>
    <input type="number" name="price" onChange={this.handleChange} className='form-control' value={this.state.price} />
    </div>

    <div className='form-group'>
    <label>Category</label>
    <select type="text" name="category" onChange={this.handleChange} className='form-control' value={this.state.category}>
    <option>Please select</option>
    <option>General</option>
    <option>Creche</option>
    <option>KG1</option>
    <option>KG2</option>
    <option>NUR1</option>
    <option>NUR2</option>
    <option>Basic1</option>
    <option>Basic2</option>
    <option>Basic3</option>
    <option>Basic4</option>
    <option>Basic5</option>
    <option>Jss1</option>
    <option>Jss2</option>
    <option>Jss3</option>
    <option>Sss1</option>
    <option>Sss2</option>
    <option>Sss3</option>
    </select>
    </div>
    <div className='form-group'>
    <label>Detail</label>
    <textarea name="detail" onChange={this.handleChange} className='form-control' value={this.state.detail} rows="3"></textarea>
    </div>
    <input type="submit" className="btn btn-outline-primary btn-block" value="Add Product" />
    </form>
    </div>
    </div>
    </div>
    </section>
    </div>
  )
}
}
Product.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    products: state.products
  }
}
export default connect(mapStateToProps,{getProducts, addProduct})(Product)
