import React,{Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/navbar'
import SignUp from './components/signUp'
import Login from './components/login'
import Home from './components/home'
import Topbar from './components/topbar'
import  Dash from './components/dash'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'tailwindcss/dist/base.min.css'
import 'tailwindcss/dist/components.min.css'
import 'tailwindcss/dist/utilities.min.css'
import 'tailwindcss/dist/tailwind.min.css'
import ChatPage from './components/chatPage'

class App extends Component {
  UNSAFE_componentWillMount() {
    axios.interceptors.request.use(function (config) {
      const token = localStorage.token;
      config.headers.Authorization =  token;

      return config;
    });
    axios.defaults.headers.common['Authorization'] = localStorage.token
    console.log(localStorage)
  // localStorage.removeItem('token')
      }

  render() {
    const loginRoutes = (

          <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/signUp' component={SignUp}/>

          </Switch>
    )
    const userRoutes = (
      <div class='flex h-screen bg-gray-100 font-sans'>
      <Navbar />
      <div class='flex flex-row flex-wrap flex-1 flex-grow content-start pl-16'>
      <Topbar/>
      <Dash/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/chat' component={ChatPage}/>
    </Switch>
    </div>
    </div>
    )
    return (
      <Router>
        <div >

          <Switch>
          {localStorage.token ? userRoutes : loginRoutes}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
