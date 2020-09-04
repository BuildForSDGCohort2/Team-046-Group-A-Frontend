import React, { Component } from 'react';
import kR from '../unnamed.jpg'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'
class Topbar extends Component {
  logOut=(e)=>{
  e.preventDefault()
  localStorage.removeItem('token')
  window.location='/'
  }
  render() {
    const decode = jwt_decode(localStorage.token)
    return (
      <div class="h-40 lg:h-20 w-full flex flex-wrap">
            <nav id="header" class="bg-gray-200 w-full lg:max-w-sm flex items-center border-b-1 border-gray-300 order-2 lg:order-1">

                <div class="px-2 w-full">
                    <select name="" class="bg-gray-300 border-2 border-gray-200 rounded-full w-full py-3 px-4 text-gray-500 font-bold leading-tight focus:outline-none focus:bg-white focus:shadow-md" id="form-field2">
                        <option value="Default">default</option>
                        <option value="A">report a</option>
                        <option value="B">report b</option>
                        <option value="C">report c</option>
                    </select>
                </div>

            </nav>
            <nav id="header1" class="bg-gray-100 w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2">

                <div class="flex h-full justify-between items-center">

                <div class="relative w-full max-w-3xl px-6">
                    <div class="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
                        <svg class="h-4 w-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg>
                    </div>

                    <input id="search-toggle" type="search" placeholder="search" class="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md text-gray-700 font-bold rounded-full pl-12 pr-4 py-3" onkeyup="updateSearchResults(this.value);"/>

                </div>


                <div class="flex relative inline-block pr-6">

                    <div class="relative text-sm">
                    <div class="dropdown dropleft">
  <button id="userButton" class="flex items-center focus:outline-none mr-3" data-toggle="dropdown">
    <img class="w-8 h-8 rounded-full mr-4" src={kR} alt="Avatar of User"/>
  </button>
  <div class="dropdown-menu">
    <Link onClick={this.logOut} class="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline"><i class='fa fa-sign-out-alt fa-fw'/>{' '}Logout</Link>
  </div>
</div>

                    </div>

                </div>


                </div>

            </nav>
        </div>

    );
  }
}

export default Topbar;
