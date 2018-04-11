import React, {Component} from 'react';
import logo from './../img/logo.png';
import iitrLogo from './../img/iitr-logo.png';
import nssLogo from './../img/nss-logo.png'
import './style/udemy.css'
import {NavLink} from 'react-router-dom';



import { Row, Grid, Col,ButtonToolbar,Button } from 'react-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'





 class Login extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      mappedMainEvents: []
    }
    // this.Bplanincreasehorizontalline = this.Bplanincreasehorizontalline.bind(this);
    // this.renderclick = this.renderclick.bind(this);
  }
  componentDidMount () {
    // axios
    //         .get(API_DOMAIN+'/api/events/?highlighted=true')
    //         .then(response => {
    //           // console.log(response.data)
    //           this.setState({ mappedMainEvents: response.data })
    //           this.Bplanincreasehorizontalline()
    //           this.renderingviewmore()
    //         })
    //         .catch(error => {
    //           console.log(error)
    //         })  


    this.setState({ mappedMainEvents: [{
		title:'KSHITIJ',
		tagline:'KER KE DENGE',
		short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
		image:{iitrLogo},
		website_url:'Kshitijpratapme.000webhostapp.com',
		end_point:"END"
    },
    {
		title:'KSHITIJ',
		tagline:'KER KE DENGE',
		short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
		image:{iitrLogo},
		website_url:'Kshitijpratapme.000webhostapp.com',
		end_point:"END"
    },
    {
		title:'KSHITIJ',
		tagline:'KER KE DENGE',
		short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
		image:{iitrLogo},
		website_url:'Kshitijpratapme.000webhostapp.com',
		end_point:"END"
    },
    {
		title:'KSHITIJ',
		tagline:'KER KE DENGE',
		short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
		image:{iitrLogo},
		website_url:'Kshitijpratapme.000webhostapp.com',
		end_point:"END"
    }]});
  }
  // renderclick(){
  //   window.href("")
  // }
 
  // Bplanincreasehorizontalline(){
  //  var x = document.getElementsByClassName('main-events-grid container');
  //    x[x.length-1].getElementsByClassName('horizontal-line-last')[0].style.maxWidth = "51vw" ;
  //    x[x.length-1].getElementsByClassName('vl')[0].style.height = "109px";
    
  //  }
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
        {this.state.mappedMainEvents.map((event, key) => (
          <div key={key}>
            <Grid className='main-events-grid'>
              <MainEventTemp
                name={event.title}
                short={event.tagline}
                long={event.short_description}
                image={event.image}                
                websiteUrl={event.website_url}
                end_point={event.end_point}
                            />
            </Grid>
          </div>
                ))}
      </div>
    )
  }
}

class MainEventTemp extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var compname = this.props.name;
    var endpoint = this.props.end_point;
    
    return (

        <Grid fluid className='fluid-event-landing'>
          <Row className='main-event-row'>
  
            <Col md={1} sm={12} xs={12}>
              <div className='vl'/>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <div className='main-event'>
                <p className='main-event-heading'>
                  <ul className="removeBullets"><li className='mainevent-li'><span className="landing-mainevent-name">{this.props.name}</span></li></ul>
                </p>
                <h3 className='main-event-short-description'>{this.props.short}</h3>
                <p className='main-event-long-description'>{this.props.long}</p>
                <h3 className='main-event-short-description'>{this.props.websiteUrl}</h3>
                <ButtonToolbar>
                  <Button bsStyle="primary" bsClass="button-view" className="viewmorebuttonlandingpage-landing" onClick={() => {
                  
                window.open(this.props.end_point,'_blank');
              
								}}>View More</Button>
                </ButtonToolbar>
                {/* <button
                  type="button"
                                  className="view-more"
                                  // onClick method improve
                  onClick={() => {
                    window.location.href = '';
                  }}
                >
                  <span>VIEW MORE</span>
                </button> */}
              </div>
            </Col>
            <Col md={5} sm={12} xs={12}>
              <div>
                <img className='main-circle-image' src={this.props.image} />
              </div>
            </Col>
          </Row>
          {/* {moredetails} */}
          
        </Grid>
      
    )

  }
}














class Udemy extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: 'one'};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: 'one'});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: 'two'});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    let buttonOne = null;
        let buttonTwo = null;
     {
      buttonOne = <button onClick={this.handleLogoutClick} > one</button>;
    } 
    {
      buttonTwo = <button onClick={this.handleLoginClick}> two</button>;
    }

    return (
      <div>
      {buttonOne}
        {buttonTwo}
        <Greeting isLoggedIn={isLoggedIn} />
        
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn=='one') {
    return <UserGreeting />;
  }
  return <Login />;
}



export default Udemy;



// class Udemy extends Component {
//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="row">
// 			<div className="col s4 m4 l4">
// 					<div className="card">
					
// 					<div className="container">
// 					<h4><b>John Doe</b></h4> 
// 					<p>Architect & Engineer</p> 
// 					</div>
// 					</div>
					
// 			</div>

// 			<div className="col s4 m4 l4">
// 					<div className="card">
					
// 					<div className="container">
// 					<h4><b>John Doe</b></h4> 
// 					<p>Architect & Engineer</p> 
// 					</div>
// 					</div>
// 			</div>
// 			<div className="col s4 m4 l4">
// 					<div className="card">
					
// 					<div className="container">
// 					<h4><b>John Doe</b></h4> 
// 					<p>Architect & Engineer</p> 
// 					</div>
// 					</div>
// 			</div>

//         </div>
          
//          <div className="row">
// 			<div className="col s4 m4 l4">
// 					<div className="card">
					
// 					<div className="container">
// 					<h4><b>John Doe</b></h4> 
// 					<p>Architect & Engineer</p> 
// 					</div>
// 					</div>
// 			</div>

// 			<div className="col s4 m4 l4">
// 					<div className="card">
					
// 					<div className="container">
// 					<h4><b>John Doe</b></h4> 
// 					<p>Architect & Engineer</p> 
// 					</div>
// 					</div>
// 			</div>
// 			<div className="col s4 m4 l4">
// 					<div className="card">
					
// 					<div className="container">
// 					<h4><b>John Doe</b></h4> 
// 					<p>Architect & Engineer</p> 
// 					</div>
// 					</div>
// 			</div>
//         </div> 
//     </div>
      
//     );
//   }
// }
// export default Udemy;