import React from 'react' 
import {withRouter} from 'react-router-dom'
import './Search.css'

const url = "https://resst-app.herokuapp.com/city" 
const rurl = "https://resst-app.herokuapp.com/rest?city="

class Search extends React.Component{
    constructor(props){
        super(props)

        this.state={ 
            city:'',
            rest:'',
        }
    }

    rendercity = (data) => {
        if(data){
            // console.log(data)
            return data.map((item) => {
                return(
                    <option value={item._id}>{item.city_name}</option>
                )
            })            
        }
    }  
    renderrest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}> {item.name}</option>
                )
            })
        }
    } 
    handlecity=(event)=>{
        // console.log(event.target.value)
        const cityId = event.target.value;
        fetch(`${rurl}${cityId}`,{method:'GET'})
        .then((res)=> res.json())
        .then((data) => { 
            // console.log(data) 
            this.setState({rest:data})
        })
    } 
    handlerest=(event)=>{
        this.props.history.push(`/details/${event.target.value}`)
    }

    render(){ 
        console.log(this.props)
        return(
            <React.Fragment>
                  <div className="imagecontainor">
                    <div className="aSection">
                        <span className="account" id="CA"> create on account </span>
                    </div> 
                    <div id="logo"> 
                        <b> e!</b>
                    </div>
                    <div id="heading">
                         Find best restorent,cafes and bars
                    </div>
                    <div className="locationselector">
                        <select className="dropdown" onChange={this.handlecity}> 
                            <option  selected disabled > ----- Select City ----</option>
                            {this.rendercity(this.state.city)}
                        </select> 
                        <select className="dropdown" id="drop" onChange={this.handlerest}>
                            <option selected disabled >----- Restaurants respect with city -----</option>
                           {this.renderrest(this.state.rest)}
                        </select>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => (res.json()))
        .then((data) => this.setState({city:data}))
    }
}


export default withRouter(Search)  ;