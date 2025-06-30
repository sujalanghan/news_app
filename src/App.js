import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

export default class App extends Component {
  pageSize = 10;
  render() {
    return (
      <div>
        <Router>   
          <Navbar />
          <Routes>

            <Route exact path='/' element={<News key="general" pagesize={this.pageSize} country="us" category="general" />}></Route>
            <Route exact path='/business' element={<News key="business" pagesize={this.pageSize} country="us" category="business" />}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" pagesize={this.pageSize} country="us" category="entertainment" />}></Route>
            <Route exact path='/general' element={<News key="general" pagesize={this.pageSize} country="us" category="general" />}></Route>
            <Route exact path='/health' element={<News key="health" pagesize={this.pageSize} country="us" category="health" />}></Route>
            <Route exact path='/science' element={<News key="science" pagesize={this.pageSize} country="us" category="science" />}></Route>
            <Route exact path='/sports' element={<News key="sports" pagesize={this.pageSize} country="us" category="sports" />}></Route>
            <Route exact path='/technology' element={<News key="technology" pagesize={this.pageSize} country="us" category="technology" />}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}

