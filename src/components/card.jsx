import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../unnamed.png'
import jwt_decode from 'jwt-decode'
class Card extends Component {
  render() {
    const decode = jwt_decode(localStorage.token)
    return (
      <div class="col-md-4">

        <div class="card card-primary card-outline">
          <div class="card-body box-profile">
            <div class="text-center">
              <img class="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture"/>
            </div>

            <h3 class="profile-username text-center">{decode.lastname+' '+decode.firstname}</h3>

            <p class="text-muted text-center">{decode.type}</p>

            <ul class="list-group list-group-unbordered mb-3">
              <li class="list-group-item">
                <b>Crops</b> <a class="float-right">{decode.crops.length}</a>
              </li>
              <li class="list-group-item">
                <b>Animals</b> <a class="float-right">{decode.animals.length}</a>
              </li>

            </ul>

          </div>
        </div>

        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">About Me</h3>
          </div>
          <div class="card-body">
            <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

            <p class="text-muted">Malibu, California</p>

            <hr/>

            <strong><i class="fas fa-pencil-alt mr-1"></i> Crops</strong>

            <p class="text-muted">
            {
              decode.crops.map(crop=>{
                return(
                  <span class="tag tag-info">{crop.crop}</span>
                )
              })
            }
            </p>

            <hr/>

            <strong><i class="fas fa-pencil-alt mr-1"></i> Animals</strong>

            <p class="text-muted">
            {
              decode.animals.map(animal=>{
                return(
                  <span class="tag tag-info">{animal.animal}</span>
                )
              })
            }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
