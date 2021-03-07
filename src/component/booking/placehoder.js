import React from 'react'
import Header from'../../Header' ;
const url = "https://resst-app.herokuapp.com/placeholder"

class Placebooking extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            rest_id: this.props.match.params.name ,
            name:'' ,
            phone: '',
            address:'',
            person:''
        }
    } 
    
     handlesubmit=() => {
         if(this.state.name==""||this.state.phone==""||this.state.address==""||this.state.person==""){
             alert("All filds are required")
         }else{
             if(this.state.phone.length==10){
                console.log(this.state)
                fetch( url,
                   {
                       method:'POST',
                       headers:{
                           'Accept':'application/json',
                           'Content-Type':'application/json'
                       },
                       body:JSON.stringify(this.state)
                   })
                   .then(this.props.history.push('/vieworder'))
             }
             else{
                 alert("Enter right Phone no.")
             }
            }
     }

 
     handlechange=(event) =>{
         this.setState({[event.target.name]:event.target.value})
     }
    render(){
        return(
                <React.Fragment>
                    <Header/>
                    <br/>
                    <div className="container">
                        <div className=" panel panel-info">
                            <div className="panel-heading">
                                Placebooking
                            </div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label> Restname </label>
                                    <input name="rest_id"  value={this.state.rest_id} readOnly
                                    className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label> Name </label>
                                    <input name="name" autoComplete="off" value={this.state.name} 
                                    className="form-control" onChange={ this.handlechange} />
                                </div> 
                                <div className="form-group">
                                    <label> mobileno </label>
                                    <input name="phone" autoComplete="off" required  value={this.state.phone} 
                                    className="form-control"  onChange={ this.handlechange}
                                    />
                                </div> 
                                <div className="form-group">
                                    <label> Address </label>
                                    <input name="address" autoComplete="off" required value={this.state.address} 
                                    className="form-control" onChange={ this.handlechange} />
                                </div>
                                <div className="form-group">
                                    <label> person </label>
                                    <input type="number" autoComplete="off" name="person" value={this.state.person} 
                                    className="form-control" onChange={ this.handlechange} />
                                </div>
                                <div className="btn btn-success" onClick={this.handlesubmit} >
                                    Placeorder
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
        )
    }
   
}

export default  Placebooking