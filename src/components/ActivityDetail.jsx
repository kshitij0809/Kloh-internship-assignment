import React, {Component} from 'react';

import { Row, Grid, Col,ButtonToolbar,Button } from 'react-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios';
import './ActivityDetail.css'


import Udemy from './ActivityList'


 class Details extends Component {
 	
  constructor (props) {
    
    super(props)
    this.state = {
      mappedMainEventsDetails:'',
      isGone: false,
    };
      this.handleGone = this.handleGone.bind(this);
 
  }

  componentDidMount () {
  	let getUrl = `https://api.kloh.in/kloh/external/v1/activity/${this.props.getUrl}`;
    axios
            .get(getUrl)
            .then(response => {
              // console.log(response.data)
              this.setState({ mappedMainEventsDetails: response.data.response })             
            })
            .catch(error => {
              console.log(error)
            })  


   
  }
  

   handleGone(e) {
    e.preventDefault();
    this.setState({
      isGone: true,
    });
  }


  render () {

  	const isGone = this.state.isGone;
  	    if(!isGone){

    return (
      <div>
        <Grid>
        <Row>
          <Col md={12} sm={12} lg={12} className="EventsCurrent">
                        Highlighted Event Details
              
        </Col>
        </Row>
        </Grid>
        {
            <Grid className='main-events-grid'>
              <MainEventTemp

                remainingSlots={this.state.mappedMainEventsDetails.remainingSlots}
                memberName={this.state.mappedMainEventsDetails.memberName}

                description={this.state.mappedMainEventsDetails.description}

                title={this.state.mappedMainEventsDetails.title}
                amount={this.state.mappedMainEventsDetails.amount}
                ownerProfileImageUrl={this.state.mappedMainEventsDetails.ownerProfileImageUrl}
                faqUrl={this.state.mappedMainEventsDetails.faqUrl}
                summary= {this.state.mappedMainEventsDetails.summary}
                // time={this.state.mappedMainEventsDetails.activityTime.activitysummaryStringV1} 
                
                
                            />
                            <button className="work-subbutton" onClick={this.handleGone}>Go Back</button> 
            </Grid>
                }

        
      </div>
    )}
    else{
    	return <Udemy/>
    }
  }
}

class MainEventTemp extends Component {
  constructor (props) {
    super(props)
  }

  render () {
   
    
    return (

        <div>
        	
        	


        	   <div className="row section-banner">
                          <div className=" col-md-12">
                            <div>
                               <div className="card">
                                  <div className="row">
                                    <div className="col-sm-4 image-work" >
                                      <img className="kunal-work-two" src={this.props.ownerProfileImageUrl}/>
                                    </div>
                                    <div className="col-sm-5 mobile-padding">
                                      <h2 className="work-subheading">{this.props.title}</h2>
                                        <p className="work-para">{this.props.description}</p>
                                       
                                         
                                    </div>
                                    <div className="col-sm-3" >
                                      <div className="remainingDetails">
                                          <div><span className="details">remainingSlots:</span>{this.props.remainingSlots}</div>
                                        <div><span className="details">amount:</span>{this.props.amount} </div>
                                        <div><span className="details">faqUrl</span><a href={this.props.faqUrl}>  FAQ's</a></div>
                                        <div><span className="details">summary:</span>{this.props.summary} </div>
                                        </div>
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

export default Details;


















