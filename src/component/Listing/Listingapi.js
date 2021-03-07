import React  from 'react'
import Display from './Listingdisplay'
import Header from '../../Header'
import Cusionfilter from '../Filters/Cusionfilter'
import Costfilter from '../Filters/Costfilter'
import Sortfilter from '../Filters/sortfilter'
// import {Link}  from 'react-router-dom'
const url = "https://resst-app.herokuapp.com/rest?mealtype="

class Listingapi extends React.Component {
    constructor(props){
        super(props)
                this.state={
                    restlist:''
                } 
    }  
    setDataPerFilter=(sortedData)=>{       
        this.setState({restlist:sortedData})
    }
    
    render(){
        console.log(this.state.restlist)
        return(
            <React.Fragment>  
                <div className="row">
                    <Header/>
                    <div id="mainbox"> 
                        <div className="col-md-2" id="filterbox" > 
                           <Cusionfilter restPerCuisine={(data) => {this.setDataPerFilter(data)}} />
                           <Costfilter restPerCost={(data) => {this.setDataPerFilter(data)}} />
                           <Sortfilter restPerCost={(data) => {this.setDataPerFilter(data)}} />
                        </div>  
                        <div className="col-md-10" id="listingbox" >
                        <Display restlist={this.state.restlist} />
                        </div>
                    </div>   
                </div>                  
            </React.Fragment>
        )
    }    
        
    componentDidMount(){
        var mealid = this.props.match.params.id
        sessionStorage.setItem('mealId',mealid)
        fetch( `${url}${mealid}`, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({restlist:data})})
    }
}

export default Listingapi 
