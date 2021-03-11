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

    this.incrementActiveCount = this.incrementActiveCount.bind(this)
    
    //state
    
    this.state = {
      loaded: false,
      activeCount: 0
    };

  };
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  componentDidMount() {                                                   

    this.setState({loaded: true });

  };


  incrementActiveCount (localCount) {

    console.log('thangthongtheng');
    // this.setState({activeCount:localCount})
    if (localCount > this.state.activeCount) {

      this.setState({activeCount: localCount})
    }
  }



  



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
                <DemoPage activeCount={this.state.activeCount} countCallback={this.incrementActiveCount}  />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

      )

  };
};

export default App;