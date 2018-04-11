import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import axios from 'axios';

class Udemy extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      mappedMainEvents: []

    };
   
    
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


   
  
  render () {
    return (
      <div className="width-column">
        <h1 className="EventsCurrent">Current Ongoing Events</h1>
        
        {this.state.mappedMainEvents.map((event, key) => (
          <div className="row" key={key}>
            
              <MainEventTemp
                name={event.title}
                short={event.ownerType}
                long={event.description}
                websiteUrl={event.imageUrl}
                ownerProfileImageUrl={event.ownerProfileImageUrl}
                date={event.activityTime.activityDateString}
                duration={event.activityTime.activityDateStringV1} 
                location={event.location.name}
               
                            />
                            
          </div>
                ))}
        
      </div>
    )
  }
}

class MainEventTemp extends Component {
  constructor (props) {
    super(props);
    
   }

  render () {
    
    
    return (

       
  
            
           


            <div className="row section-banner">
              <div className="col-md-offset-1 col-md-12">
                <div>
                   <div className="card">
                      <div className="row">
                        <div className="col-sm-4 image-work" >
                          <img className="kunal-work-two" src={this.props.websiteUrl}/>
                        </div>
                        <div className="col-sm-5 mobile-padding">
                          <h2 className="work-subheading">{this.props.name}</h2>
                            <p className="work-para">{this.props.long}</p>
                           
                            <button className="work-subbutton">{this.props.short}</button>  
                             
                        </div>
                        <div className="col-sm-3" >
                          <img className="kunal-work-one" src={this.props.ownerProfileImageUrl}/>
                          <div>
                              <div><span className="details">date:</span>{this.props.date}</div>
                            <div><span className="details">duration:</span>{this.props.duration}</div>
                            <div><span className="details">location:</span>{this.props.location}</div>
                            </div>
                        </div>
                      </div>
                    </div>                 
                </div>
              </div>
            </div>
          
         
      
    )

  }

}
export default Udemy;