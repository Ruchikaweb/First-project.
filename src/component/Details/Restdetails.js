import React from 'react'
import './Details.css'
import Header from'../../Header' ;
import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const url ="https://resst-app.herokuapp.com/rest"

class Displaypage extends React.Component{
    constructor(){
        super()
                this.state={
                    restdisplay: ''
                }   
    } 
    
    render(){ 
        let details = this.state.restdisplay
            // console.log(this.state)
        return(
            <React.Fragment>
                   <Header/>
                   <br/>
                  <div className="container">
                      <div className=" panel panel-warning">
                          <div className="panel-heading"> 
                            <h1> {details.name} </h1>
                          </div>
                          <div className="panel-body">
                              <div className="row">
                                  <div className="col-md-12">
                                      <img className="imgresponse" src={details.thumb}/>
                                  </div>
                                  <div className="col-md-6">
                                  <h3>{details.name}</h3>
                                  <h3>{details.locality}</h3>
                                  <h3>{details.address}</h3>
                                  </div>
                              </div>
                          </div>
                          <hr/>
                          <Tabs>
                            <TabList>
                                <Tab> Overview </Tab>
                                <Tab> Contact </Tab>
                            </TabList>

                            <TabPanel>
                                <h2>About This Place</h2>
                                <p>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                            </TabPanel>
                            <TabPanel>
                                <h2>Contact Us</h2>
                                <h3>{details.address}</h3>
                                <h3>Phone: 9655868686</h3>
                            </TabPanel>
                        </Tabs>
                        <Link to="/" className="btn btn-warning"> Back  </Link> 
                        <Link to={`/booking/${details.name}`} className="btn btn-success"> Proceed Order </Link>
                      </div>
                  </div>   
            </React.Fragment>
        )
    }

    componentDidMount(){
        const hotelId=this.props.match.params.id
        fetch(`${url}/${hotelId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({restdisplay:data[0]})})
    }
}


export  default Displaypage ;