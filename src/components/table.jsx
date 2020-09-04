import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import jwt_decode from 'jwt-decode'
import {getPosts} from '../actions/candidateAction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './script'
class Table extends Component {
  /**
   * componentDidMount
   * @return {void}
   */
  componentDidMount() {
    this.props.getPosts()
    const {posts} = this.props.posts
    this.setState({
      posts:[...posts]
    })
  }
  state={
    posts:[]
  }
  search=e=> {
      this.setState({
        posts:this.state.posts.filter(posts => (posts._id).toLowerCase() !== (e.target.value).toLowerCase())
      })
  }
  render() {

    // const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
    const data = this.state.posts.map(post=>{
      return(
        {category:post.category, price:post.price, description:post.description}
      )
    })
    const columns = [
      {
        name: 'Category',
        selector: 'category',
        sortable: true,
        filterable:true
      },
      {
        name: 'Price',
        selector: 'price',
        sortable: true,
        right: true,
        filterable:true
      },
      {
        name: 'Description',
        selector: 'description',
        sortable: true,
        right: true,
      }
    ];
    return (
      <div className='tab-pane' id='table'>
      <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text"><i className='fa fa-fw fa-search'/>Search by Category</span>
    </div>
    <input type="text" class="form-control" placeholder="Category" onChange={this.search}/>
  </div>
  <br/>
      <DataTable
        title="Arnold S Movies"
        columns={columns}
        data={data}
        fixedHeader={true}
        pagination={true}
        responsive={true}
        striped={true}
        highlightOnHover={true}
        theme='dark'
        id='myTable'
      />
      </div>
    )
  }
};
Table.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    posts: state.posts
  }
}
export default connect(mapStateToProps,{getPosts})(Table);
