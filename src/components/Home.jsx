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
        
        
        {this.state.mappedMainEvents.map((event, key) => (
          <div key={key}>
            
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

       
  
            
            <div className="card">
              <div className='main-event'>
               <div>{this.props.name}</div>
               <div>{this.props.short}</div>
               <div>{this.props.long}</div>
               <div><img src={this.props.websiteUrl}/></div>
              </div>
             
         
            </div>            
         
      
    )

  }

}
export default Udemy;