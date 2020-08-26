import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../unnamed.png'
import jwt_decode from 'jwt-decode'
class Home extends Component {
  render() {
    const decode = jwt_decode(localStorage.token)
    return (
      <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover mx-auto container mt-5" style={{width:'700px'}}>



  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

	<div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">


		<div class="p-4 md:p-12 text-center lg:text-left">
			<div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{backgroundImage: 'url('+(decode.image==='no image' ? logo : decode.image)+')'}}></div>

			<h1 class="text-3xl font-bold pt-8 lg:pt-0">{decode.name}</h1>
			<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
			<p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><i class='fa fa-fw fa-envelope'/> {' '+decode.email}</p>
      <hr/>
      <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><i class='fa fa-fw fa-list-alt'/> Crops :
      </p>
      <div class='row'>
        {
          decode.crops.map(crop=>{
            return(
              <div class='col-md-2 m-2'>{crop.crop}</div>
            )
          })
        }
      </div>


		</div>

	</div>

	<div class="w-full lg:w-2/5">
		<img src={decode.image==='no image' ? logo : decode.image} class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>

	</div>




</div>

	<script src="../../unpkg.com/popper.js%401.16.1/dist/umd/popper.min.js"></script>
	<script src="https://unpkg.com/tippy.js@4"></script>
	<script>


    </script>




</div>
    );
  }
}

export default Home;
