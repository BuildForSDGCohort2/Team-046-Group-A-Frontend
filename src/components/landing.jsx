import React, { Component } from 'react';
import bg from './bg.svg'
import device from './devices.svg'
import { Link } from 'react-router-dom'
class Landing extends Component {
  farmerLogin=e=>{
    e.preventDefault()
    this.props.history.push('/farmer_login')
  }
  consumerLogin=e=>{
    e.preventDefault()
    this.props.history.push('/consumer_login')
  }
  farmerSignUp=e=>{
    e.preventDefault()
    this.props.history.push('/farmer_signUp')
  }
  consumerSignUp=e=>{
    e.preventDefault()
    this.props.history.push('/consumer_signUp')
  }
  render() {
    return (
      <div class="leading-normal tracking-normal text-gray-900" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>


<div class="h-screen pb-14 bg-right bg-cover" style={{backgroundImage:'url('+bg+')'}}>
	<div class="w-full container mx-auto p-6">



	</div>

	<div class="container pt-24 md:pt-32 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">

		<div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
			<h1 class="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Farm Connect</h1>
			<p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">An application that connects farmers to consumers
      <br/>Works on all devices
      </p>

			<p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Get Started</p>
			<div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in row">
      <div class='col'>
      <div class="dropdown">
  <button type="button" class="btn btn-outline-info btn-block h-12  bounce-top-icons" data-toggle="dropdown">
  <i class='fa fa-fw fa-sign-in-alt'/>{'  '}Sign In
  </button>
  <div class="dropdown-menu">
  <Link to='/farmer_login' class='dropdown-item'>Farmer</Link>
  <Link to='/consumer_login' class='dropdown-item'>Consumer</Link>
  </div>
</div>
      </div>
      <div class='col'>
      <div class="dropdown">
  <button type="button" class="btn btn-outline-primary btn-block h-12 bounce-top-icons" data-toggle="dropdown">
    <i class='fa fa-fw fa-user-plus'/>{'  '}Sign Up
  </button>
  <div class="dropdown-menu">
  <Link to='/farmer_signUp' class='dropdown-item'>Farmer</Link>
  <Link to='/consumer_signUp' class='dropdown-item'>Consumer</Link>
  </div>
</div>
      </div>
      </div>

			</div>



		<div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
			<img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src={device}/>
		</div>

		<div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
			<a class="text-gray-500 no-underline hover:no-underline" href="#">© Team-046-Group-A</a>
		</div>

	</div>


</div>





</div>
    );
  }
}

export default Landing;
