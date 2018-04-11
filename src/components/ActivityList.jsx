import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './ActivityList.css';
import axios from 'axios';

import Details from './ActivityDetail'

class Udemy extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      mappedMainEvents: [],
      isSubmitted: false,
      shareUrl:''

    };
   this.handleFormSubmit = this.handleFormSubmit.bind(this);
    
  }


  componentDidMount () {


    const user = {

"location": {

"lat": 12.926031,

"lon": 77.676246

}
};

       axios.post(`https://api.kloh.in/kloh/external/v1/activity/list`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data.response.results);
        console.log({user});
        this.setState({ mappedMainEvents: res.data.response.results})
      })
    }


   
  handleFormSubmit(url,e) {
    e.preventDefault();
    this.setState({
      isSubmitted: true,
      shareUrl: url,
    });
  }


  render () {


    const isSubmitted = this.state.isSubmitted;


    if(!isSubmitted){
    return (
      <div className="width-column">
        <h1 className="EventsCurrent">Current Ongoing Events</h1>
        
        {this.state.mappedMainEvents.map((event, key) => (
          <div className="row" key={key}>
            
             

                         <div className="row section-banner">
                          <div className="col-md-offset-1 col-md-12">
                            <div>
                               <div className="card">
                                  <div className="row">
                                    <div className="col-sm-4 image-work" >
                                      <img className="kunal-work-two" src={event.imageUrl}/>
                                    </div>
                                    <div className="col-sm-5 mobile-padding">
                                      <h2 className="work-subheading">{event.title}</h2>
                                        <p className="work-para">{event.description}</p>
                                       
                                        <button className="work-subbutton" onClick={e => this.handleFormSubmit(event.activityId,e)}>Join</button>  
                                         
                                    </div>
                                    <div className="col-sm-3" >
                                      <img className="kunal-work-one" src={event.ownerProfileImageUrl}/>
                                      <div>
                                          <div><span className="details">date:</span>{event.activityTime.activityDateString}</div>
                                        <div><span className="details">duration:</span>{event.activityTime.activityDateStringV1} </div>
                                        <div><span className="details">location:</span>{event.location.name}</div>
                                        </div>
                                    </div>
                                  </div>
                                </div>                 
                            </div>
                          </div>
                        </div>





                            
          </div>
                ))}
        
      </div>
    )}
    else{
      return (<Details
                  getUrl={this.state.shareUrl}/>)

    }
  }
}


export default Udemy;