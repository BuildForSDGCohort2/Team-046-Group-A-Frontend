import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import kR from '../unnamed.png'
import {productDetail,getItem} from '../actions/candidateAction'
import './style.css'
import axios from 'axios'
class ProductDetail extends Component {
state={
  name:'',
  price:'',
  detail:'',
  category:'',
  image:''
}
componentDidMount() {
  this.props.match.params.product_id ?(
    this.props.productDetail(this.props.match.params.product_id)
    ):(
    this.props.getItem(this.props.match.params.cart_id)
  )
this.props.match.params.product_id ?
    axios.get('/product/'+this.props.match.params.product_id)
      .then(res=>{
        this.setState({
          name:res.data.name,
          price:res.data.price,
          detail:res.data.detail,
          category:res.data.category,
          image:res.data.image
        })
      })
      :
      axios.get('/cart/'+this.props.match.params.cart_id)
        .then(res=>{
          this.setState({
            name:res.data.name,
            price:res.data.price,
            detail:res.data.detail,
            category:res.data.category,
            image:res.data.image
          })
        })
}


  render(){
    const {product} = this.props.product
    return(
      <div class="main-content">
      <h3 className='text-center'>Products Page</h3>
      <section class="blog_area section-padding">
      <div class="container">
      <div class="row">
      <div class="col-md-9">
      <div class="row">
      <div class="col-md-9 mx-auto m1" key={product._id}>

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
      </div>
      </div>
      <div class="col-md-3">
      <form onSubmit={this.addProduct}>
      {
        (this.state.image!==product.image)?(
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
ProductDetail.propTypes = {
  productDetail: PropTypes.func.isRequired,
  getItem: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    product: state.product
  }
}
export default connect(mapStateToProps,{productDetail,getItem})(ProductDetail)
