import React from 'react'
import axios from 'axios' ;

const url = "https://resst-app.herokuapp.com/rest?mealtype="

class Sortfilter extends React.Component{

    Sortfilter = (event) =>{
        var mealId = sessionStorage.getItem('mealId')
        let sort =  event.target.value 
        const costUrl=`${url}${mealId}&sort=${sort}`
        axios.get(costUrl)
        .then((response) => {this.props.restPerCost(response.data)})
    } 
    render(){
        return(
            <React.Fragment>
                <div onChange={this.Sortfilter}>
                    <center> <b> Sort </b> </center> <br/>
                    <label> <input type="radio" value="1" name="cusion"/> 
                    Low - High
                    </label> <br/>
                    <label> <input type="radio" value="-1" name="cusion"/> 
                    High - Low
                    </label> 
                </div>
            </React.Fragment>
        )
    }
}

export default Sortfilter