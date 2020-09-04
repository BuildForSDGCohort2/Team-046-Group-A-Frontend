import React, { Component } from 'react';
class Map extends Component {
  state={
    latitude:null,
    longitude:null,
    userAddress:null
  }
  getLocation=() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError)
    }else{
      alert('Geolocation is not supported by this browser')
    }
  }
  getCoordinates=(position) => {
    console.log(position.coords.latitude)
    this.setState({
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    })
  }
  handleLocationError=(error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
      alert('User Denied d request for geolocation')
        break;
      case error.POSITION_UNAVAILABLE:
      alert('Location information is unavailable')
        break;
      case error.TIMEOUT:
      alert('The request to get user location timed out')
        break;
      case error.UNKNOWN_ERROR:
      alert('unknown error')
        break;
      default:
        alert('unknown error')

    }
  }
  render() {
    return (
      <div className='container' style={{width:"75%"}}>
      <h2 className="text-center">Geolocation Example</h2>
      <button type="button" className='btn btn-outline-info btn-block' onClick={this.getLocation}>Get Coordinates</button>
      <p>Latitude: {this.state.latitude}</p>
      <p>Longitude: {this.state.longitude}</p>
      <p>Address: {this.state.userAddress}</p>
      {
        this.state.latitude && this.state.longitude ?
        <img src={`https://maps.googleapis.com`} alt="" />
        :
        null
      }
      </div>
    );
  }
}

export default Map;
