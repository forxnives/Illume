import React from 'react';
import Active from '../Active/Active';
import Table from '../Table/Table';
import Nav from '../Nav/Nav';

import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';
import emailjs from 'emailjs-com';

import {
  Switch,
  Route,
  withRouter,
  Link,
  BrowserRouter as Router
} from "react-router-dom";


class DemoPage extends React.Component {  
    constructor(props){
        super(props);

    //state
        this.state = {
            date: [],
            symbol: [],
            status: [],
            direction: [],
            link: [],
            loaded: false,
            activePastToggle: true
        };
    
        //keeping an array of objects for active forecasts outside of state, to avoid unnecesary calls to backend
        this.activeObject = []
    
        // keeping an 'update tracker' array outside of state. first value is a boolean that changes on update, and the second is the previous boolean   
        this.updateTracker = {
            tracker1: false,
            tracker2: false,
            activeinit: 0
        }          //we change the first value in componentDidUpdate, and send push notification only if values are different.
                                                        //we change the previous to match the present after sending notification
    };

        componentDidMount() {                                                        //component has mounted after initial state

            //Setting up timer and calling iterate every period
              this.iterate()
              this.timerID = setInterval(() => this.iterate(), 60000);
              this.setState({loaded: true });
          
            };
          
            componentDidUpdate(prevProps, prevState) {                                     //component is updating after mount
          
              //checking if state has changed
              if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {    
                console.log('state changed apprently')
          
                //getting list of links for active forecasts
                let activeLinks = this.getActiveTradeUrls()
          
                //counting activeIni...page is initialized after 5 iterations
                this.updateTracker.activeinit++
                
                //only proceed if there are active links
                if (activeLinks.length !== 0){
                  if (activeLinks[0] !== undefined){
          
                    //fetching data for each active forecast
                    activeLinks.map(link => {
                        this.activeFetch(link.slice(18))    //slicing to crop out 'http://fxssi/ and plugging into helper function that fetches active forecasts
          
                      //since we have updated active forecasts, we want to indicate a change in the update tracker:
                      this.updateTracker.tracker1 === false ? this.updateTracker.tracker1 = true : this.updateTracker.tracker1 = false;
                    })
                  }
                }
              }
            }
          
            componentWillUnmount() {                       //clearing timer on unmount
              clearInterval(this.timerID);
            }
              
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            iterate() {                            //the iterate thats run every period
              this.getBigJson();
              console.log('iterating?')
            };
          
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          
            // updateUser function to be called onLoad of app div, only if active forecasts have changed:
          
            updateUser () {
          
              //checking if update tracker has indicated a change
              console.log('updateusering')
          
              if (this.updateTracker.tracker1 !== this.updateTracker.tracker2){
          
                //only running if initialized (componentDidRun runs 5 times before initializtion is complete)
                if (this.updateTracker.activeinit > 5){
                  console.log('urkay')
                  this.sendEmail();
                  this.pushNotify();
                  
                  //making both trackers the same
                  this.updateTracker.tracker2 = this.updateTracker.tracker1;
                } 
              }
            };
          
            // Send Email helper function used in updateUser
            sendEmail() {
          
              //setting up email template parameters
              const templateParams = {
                to_name:'Duzi',
                image: this.activeObject[this.activeObject.length -1].image,
                entry: this.activeObject[this.activeObject.length -1].entry,
                stop_loss: this.activeObject[this.activeObject.length -1].stoploss,
                target: this.activeObject[this.activeObject.length -1].target1
              }
          
              //sending the email
          
              emailjs.send('gmail', 'template_2YgRZVhR', templateParams, 'user_hq8Fp0UIo0ZxpAwj8BEg5')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
          }
          
            //send notification helper function used in updateUser
          
            pushNotify() {
          
              addNotification({                                                  
                  title: 'Active forecasts have changed!',
                  subtitle: 'Take action!',
                  message: 'Go to the site for details',
                  theme: 'darkblue',
                  native: true // when using native, your OS will handle theming.
          
              });
            }
          
            //Fetching initial big Json and updating state
          
            getBigJson = async () => {
              const response = await fetch('/all');
              const data = await response.json();


          
          
              const dateArray = this.arrayBuild(data, 'date');
              const symbolArray = this.arrayBuild(data, 'symbol');
              const statusArray = this.arrayBuild(data, 'status');
              const directionArray = this.arrayBuild(data, 'direction');
              const linkArray = this.arrayBuild(data, 'symbol', true);
              
          
              this.setState({date: dateArray });
              this.setState({symbol: symbolArray });
              this.setState({status: statusArray });
              this.setState({direction: directionArray });
              this.setState({link: linkArray })
            };
          
            
            //helper function used in componentDidUpdate that returns a list of links for active forecasts..
          
            getActiveTradeUrls () {
              const activeLinkArray = [];
              
          
              (this.state.status).map((entry, i) =>{
                if (entry === 'Market') {
                  activeLinkArray.push(this.state.link[i])
                }
              })
          
              return activeLinkArray;
            }
          
            //helper function used in componentDidUpdate that fetches information for active forecasts and pushes object to this.activeObject
          
            activeFetch = async (url_url) => {
          
                const response = await fetch(`/active/${url_url}`);
                const data = await response.json();
                console.log('activelyfetching')
                this.activeObject.push(data)
          
            }
          
            //helper function that converts html string to an HTML element
          
            stringToHTML (str) {
          
              const parser = new DOMParser();
              const doc = parser.parseFromString(str, 'text/html');
              return doc.body;
          
          };
          
            //helper function for 'getBigJson'.. helps in breaking down big json into arrays
          
            arrayBuild (data, key='symbol', extractingLinks=false){
              let i;
              let array = [];
              if (extractingLinks) {
                for (i in data){
                  array.push(data[i][key].slice(9, -12))
                }
          
              }else{
                for (i in data){
                  array.push(data[i][key])
                }
              }
              return array;
            }



            handleNavClick () {
              this.setState({activePastToggle: !this.state.activePastToggle});
              console.log(this.state.activePastToggle);
            }






    render () {
        return (  
            <section className='demo-section'>

                {/* <Nav onLoad={this.updateUser()} /> */}
                <div className="demo-container">
                  <div className="sidebar">
                    {/* <h1>THANG THANG</h1> */}




                    <div class="sidenav-container">
                      <ul class="sidenav">
                        <li onClick={() => this.setState({activePastToggle:true})} class={
                          this.state.activePastToggle && ('active')
                        }>
                          <a href="#">
                            <span class="icon-home"></span>
                            <span class="text">Active Signals</span>
                          </a>
                        </li>
                        <li onClick={() => this.setState({activePastToggle:false})} class={
                          !this.state.activePastToggle && ('active')
                        } >
                          <a href="#">
                            <span class="icon-user"></span>
                            <span class="text">Past Signals</span>
                          </a>
                          </li>

                      </ul>
                    </div>





                  </div>
                  {
                    this.state.activePastToggle ? 
                  (<Active  object={this.activeObject} date={ this.state.date } symbol={ this.state.symbol } status={ this.state.status } 
                  direction={ this.state.direction } link={ this.state.link } />)
                  :
                  (<Table date={ this.state.date } symbol={ this.state.symbol } status={ this.state.status } direction={ this.state.direction } link={ this.state.link }  />)
                  }
                  
                  

                </div>

            </section>

        )
    }


}

export default withRouter(DemoPage)