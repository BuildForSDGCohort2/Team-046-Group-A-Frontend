import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../unnamed.png'
import jwt_decode from 'jwt-decode'
import Activity from './activity'
import Setting from './settings'
import Table from './table'
class Tabs extends Component {
  render() {
    const decode = jwt_decode(localStorage.token)
    return (
          <div class="col-md-8">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item"><a class="nav-link active" href="#activity" data-toggle="tab">Activity</a></li>
                  <li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
                  <li class="nav-item"><a class="nav-link" href="#table" data-toggle="tab">Table</a></li>
                </ul>
                </div>
              <div class="card-body">
                <div class="tab-content">
                  <Activity/>
                  <Setting/>
                  <Table/>
                </div>
            </div>
          </div>
          </div>
    );
  }
}

export default Tabs;
