import React from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Blog from './pages/Blog'
import Location from './components/footer'

import './styles/index.css'
import './styles/header.css'

import logo from './images/logo2.png'

export default function Index() {
  return (
    <div>
    <Router>
      <div>
        <nav>
            <ul>
            <li>
                <Link to="/" className='Link'>Home</Link>
            </li>
            <li>
                <Link to="/about" className='Link' >Our Church</Link>
            </li>
            <li>
              <Link to="/"><img src={logo} width='50' height='50'/></Link>
            </li>
            <li>
                <Link to="/events" className='Link'>Events</Link>
            </li>
            <li>
                <Link to="/blog" className='Link'>Blog</Link>
            </li>
            </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
        </Switch>
      </div>
    </Router>
    <footer>
      <Location/>
    </footer>
  </div>
  )
}

ReactDOM.render(<Index/>, document.getElementById('root'))

