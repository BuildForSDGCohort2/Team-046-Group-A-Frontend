import React, { Component } from 'react';
import kR from '../unnamed.jpg'
import jwt_decode from 'jwt-decode'
import './script'
class Dash extends Component {
  render() {
    const decode = jwt_decode(localStorage.token)
    return (
      <div id="dash-content" class="bg-gray-200 py-6 lg:py-0 w-full lg:max-w-sm flex flex-wrap content-start">

          <div class="w-1/2 lg:w-full">
              <div class="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                  <div class="flex flex-col items-center">
                      <div class="flex-shrink pr-4">
                          <div class="rounded-full p-3 bg-gray-300"><i class="fa fa-wallet fa-fw fa-inverse text-indigo-500"></i></div>
                      </div>
                      <div class="flex-1">
                          <h3 class="font-bold text-3xl">Value<span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
                          <h5 class="font-bold text-gray-500">Info</h5>
                      </div>
                  </div>
              </div>
          </div>

          <div class="w-1/2 lg:w-full">
              <div class="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                  <div class="flex flex-col items-center">
                      <div class="flex-shrink pr-4">
                          <div class="rounded-full p-3 bg-gray-300"><i class="fas fa-users fa-fw fa-inverse text-indigo-500"></i></div>
                      </div>
                      <div class="flex-1">
                          <h3 class="font-bold text-3xl">Value <span class="text-orange-500"><i class="fas fa-exchange-alt"></i></span></h3>
                          <h5 class="font-bold text-gray-500">Info</h5>
                      </div>
                  </div>
              </div>
          </div>

          <div class="w-1/2 lg:w-full">
              <div class="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                  <div class="flex flex-col items-center">
                      <div class="flex-shrink pr-4">
                          <div class="rounded-full p-3 bg-gray-300"><i class="fas fa-user-plus fa-fw fa-inverse text-indigo-500"></i></div>
                      </div>
                      <div class="flex-1">
                          <h3 class="font-bold text-3xl">Value <span class="text-yellow-600"><i class="fas fa-caret-up"></i></span></h3>
                          <h5 class="font-bold text-gray-500">Info</h5>
                      </div>
                  </div>
              </div>
          </div>

          <div class="w-1/2 lg:w-full">
              <div class="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                  <div class="flex flex-col items-center">
                      <div class="flex-shrink pr-4">
                          <div class="rounded-full p-3 bg-gray-300"><i class="fas fa-server fa-fw fa-inverse text-indigo-500"></i></div>
                      </div>
                      <div class="flex-1">
                          <h3 class="font-bold text-3xl">Value</h3>
                          <h5 class="font-bold text-gray-500">Info</h5>
                      </div>
                  </div>
              </div>
          </div>

      </div>

    );
  }
}

export default Dash;
