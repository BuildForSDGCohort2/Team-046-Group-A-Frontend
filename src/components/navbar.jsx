import React, { Component } from 'react';
import kR from '../unnamed.png'
import {Link} from 'react-router-dom'
import logo from './f2.png'
import jwt_decode from 'jwt-decode'
class Navbar extends Component {
  logOut=(e)=>{
  e.preventDefault()
  localStorage.removeItem('token')
  window.location='/'
  }
  leave=(e)=>{
  e.preventDefault()
  }
    render() {
      const decode = jwt_decode(localStorage.token)
        return (
            <div>
            <div id="sidebar" class="h-screen w-16 menu bg-white text-white px-4 flex items-center nunito static fixed shadow">

        <ul class="list-reset ">
            <li class="my-2 md:my-0">
                <Link to="/" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <i class="fas fa-home fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Home</span>
                </Link>
            </li>
            {
              decode.type==='farmer' ?
              <React.Fragment>
              <li class="my-2 md:my-0 ">
              <Link to="/posts" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
              <i class="fas fa-list-alt fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Posts</span>
              </Link>
              </li>
              <li class="my-2 md:my-0 ">
              <Link to="/uploads" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
              <i class="fas fa-upload fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Uploads</span>
              </Link>
              </li>
              </React.Fragment>
              :
              <li class="my-2 md:my-0 ">
              <Link to="/posts" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
              <i class="fas fa-list-alt fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Posts</span>
              </Link>
              </li>
            }
            <li class="my-2 md:my-0">
                <Link to="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <i class="fa fa-envelope fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Messages</span>
                </Link>
            </li>
            <li class="my-2 md:my-0">
                <Link to="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <i class="fas fa-chart-area fa-fw mr-3 text-indigo-400"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Analytics</span>
                </Link>
            </li>
            <li class="my-2 md:my-0">
                <Link to="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <i class="fa fa-wallet fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Payments</span>
                </Link>
            </li>
        </ul>

    </div>
            </div>
          );
    }
}

export default Navbar;
