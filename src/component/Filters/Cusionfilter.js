import React from 'react'
import axios from 'axios' ;

const url = "https://resst-app.herokuapp.com/rest?mealtype="

class Cusionfilter extends React.Component{

    Cuisinefilter = (event) =>{
        var mealId = sessionStorage.getItem('mealId')
        console.log(mealId) 
        let cuisineid =  event.target.value 
        console.log(cuisineid)
        let cusionUrl 
        if(cuisineid==''){
            cusionUrl= `${url}${mealId}`
        }else{
            cusionUrl = `${url}${mealId}&cuision=${cuisineid}`
        } 
        axios.get(cusionUrl)
        .then((response) => {this.props.restPerCuisine(response.data)})
    } 
    render(){
        return(
            <React.Fragment>
                <div onChange={this.Cuisinefilter}>
                    <center> <b> Cusion </b> </center> <br/>
                    <label> <input type="radio" value="" name="cusion"/> 
                    All 
                    </label> <br/>
                    <label> <input type="radio" value="1" name="cusion"/> 
                    North Indian 
                    </label>
                    <label>  <input type="radio" value="2" name="cusion"/> 
                    South Indian 
                    </label> <br/>
                    <label> <input type="radio" value="3" name="cusion"/>
                    Chinese 
                    </label> <br/>
                    <label> <input type="radio" value="4" name="cusion"/>
                    Fast food 
                    </label> <br/>
                    <label> <input type="radio" value="5" name="cusion"/> 
                    Street food 
                    </label> 
                </div>
            </React.Fragment>
        )
    }
}

export default Cusionfilter