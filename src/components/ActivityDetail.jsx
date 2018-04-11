import React, {Component} from 'react';

import { Row, Grid, Col,ButtonToolbar,Button } from 'react-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios';




 class Details extends Component {
 	
  constructor (props) {
    
    super(props)
    this.state = {
      mappedMainEventsDetails:'',
    };
    
  }

  componentDidMount () {

    axios
            .get(this.props.getUrl)
            .then(response => {
              // console.log(response.data)
              this.setState({ mappedMainEventsDetails: response.data.response })             
            })
            .catch(error => {
              console.log(error)
            })  


   
  }
  
  render () {
    return (
      <div>
        <Grid>
        <Row>
          <Col md={12} sm={12} lg={12}  className='heading-landing'>
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

                
                
                            />
            </Grid>
                }
                <div>shdcfb:{this.props.url}</div>
      </div>
    )
  }
}

class MainEventTemp extends Component {
  constructor (props) {
    super(props)
  }

  render () {
   
    
    return (

        <div>
        	
        	<div>remainingSlots:{this.props.remainingSlots}</div>
        	<div>memberName:{this.props.memberName}</div>
        	

        	<div>description:{this.props.description}</div>
        	<div>title:{this.props.title}</div>
        	<div>amount:{this.props.amount}</div>

        	<div>ownerProfileImageUrl:<img src={this.props.ownerProfileImageUrl}/></div>

        </div>
      
    )

  }
}

export default Details;


















