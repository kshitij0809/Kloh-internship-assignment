import React, {Component} from 'react';

import { Row, Grid, Col,ButtonToolbar,Button } from 'react-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios';




 class Details extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      mappedMainEventsDetails:'',
    };
    
  }
  componentDidMount () {
    axios
            .get('https://api.kloh.in/kloh/external/v1/activity/AID171018171227598DWY6ZBZFKTHANJ8N4T')
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
                        highlighted events
              
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


















