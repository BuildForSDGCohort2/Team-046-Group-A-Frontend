import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../unnamed.png'
import jwt_decode from 'jwt-decode'
import Card from './card'
import Tabs from './tabs'
class Home extends Component {
  render() {
    const decode = jwt_decode(localStorage.token)
    return (
      <section class="content" style={{width:'1010px'}}>
      <div class="container-fluid">
        <div class="row">
          <Card/>
          <Tabs/>
        </div>
      </div>
    </section>
    );
  }
}

export default Home;
