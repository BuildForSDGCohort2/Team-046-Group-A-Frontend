import React,{Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/navbar'
import SignUp from './components/signUp'
import Login from './components/login'
import Home from './components/home'
import Topbar from './components/topbar'
import  Dash from './components/dash'
import Landing from './components/landing'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'tailwindcss/dist/base.min.css'
import 'tailwindcss/dist/components.min.css'
import 'tailwindcss/dist/utilities.min.css'
import 'tailwindcss/dist/tailwind.min.css'
import ChatPage from './components/chatPage'
import jwt_decode from 'jwt-decode'
import Uploads from './components/uploads'
class App extends Component {
  UNSAFE_componentWillMount() {
    axios.interceptors.request.use(function (config) {
      const token = localStorage.token;
      config.headers.Authorization =  token;

      return config;
    });
    axios.defaults.headers.common['Authorization'] = localStorage.token
      }

  render() {
    const decode = !localStorage.token ? '' : jwt_decode(localStorage.token)
    const loginRoutes = (

          <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/farmer_login' component={Login}/>
          <Route path='/farmer_signUp' component={SignUp}/>
          <Route exact path='/consumer_login' component={Login}/>
          <Route path='/consumer_signUp' component={SignUp}/>

          </Switch>
    )
    const farmerRoutes = (
      <div class='flex h-screen bg-gray-100 font-sans'>
      <Navbar />
      <div class='flex flex-row flex-wrap flex-1 flex-grow content-start pl-16'>
      <Topbar/>
      <Dash/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/uploads' component={Uploads}/>
      <Route exact path='/chat' component={ChatPage}/>
    </Switch>
    </div>
    </div>
    )
    const consumerRoutes = (
      <div class='flex h-screen bg-gray-100 font-sans'>
      <Navbar />
      <div class='flex flex-row flex-wrap flex-1 flex-grow content-start pl-16'>
      <Topbar/>
      <Dash/>
      <Switch>
    </Switch>
    </div>
    </div>
    )
    return (
      <Router>
        <div >

          <Switch>
          {localStorage.token ? (decode.type==='farmer' ? farmerRoutes : consumerRoutes) : loginRoutes}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
