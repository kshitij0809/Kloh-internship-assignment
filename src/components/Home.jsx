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

       
  
            
           


            <div class="row section-banner">
              <div class="col-md-offset-1 col-md-12">
                <div>
                   <div class="card">
                      <div class="row">
                        <div class="col-sm-5 image-work" >
                          <img class="kunal-work-two" src={this.props.websiteUrl}/>
                        </div>
                        <div class="col-sm-7 mobile-padding">
                          <h2 class="work-subheading">{this.props.name}</h2>
                            <p class="work-para">{this.props.long}</p>
                            <button class="work-subbutton">{this.props.short}</button>
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