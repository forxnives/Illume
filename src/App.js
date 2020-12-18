import React from 'react';
import './App.css';

import './sass/e-commerce-icons.css';
import './sass/basic-icons.css';

import 'tachyons';

import Nav from './Components/Nav/Nav';

import DemoPage from './Components/DemoPage/DemoPage';
import HomePage from './Components/HomePage/HomePage';

import {
  Switch,
  Route,
  withRouter,
  Link,
  BrowserRouter as Router
} from "react-router-dom";


class App extends React.Component { 
  constructor(props) {
    super(props);
    
    //state
    
    this.state = {
      loaded: false
    };

  };
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  componentDidMount() {                                                   

    this.setState({loaded: true });

  };



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div className="ting">
        <Router >
          <div className='app'>
            <Nav/>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/demo">
                <DemoPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

      )

  };
};

export default App;