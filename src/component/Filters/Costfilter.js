import React from 'react'
import axios from 'axios'; 
const url = "https://resst-app.herokuapp.com/rest?mealtype="

class Costfilter extends React.Component{
    Costfilter = (event) =>{
        let mealId = sessionStorage.getItem('mealId')
        let costid =  (event.target.value).split(',')
        let lcost = costid[0] ;
        let hcost = costid[1] ;
        let costurl 
        if(costid==''){
            costurl= `${url}${mealId}`
        }else{
            costurl = `${url}${mealId}&lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costurl)
        .then((response) => {this.props.restPerCost(response.data)})
    } 
    render(){
        return(
            <React.Fragment>
                <center> <b> Cost </b> </center> <br/>
                <div onChange={this.Costfilter}>
                    <label> <input type="radio" value="" name="cusion"/> 
                    All 
                    </label> <br/>
                    <label> <input type="radio" value="0,100" name="cusion"/> 
                    0-100
                    </label> <br/>
                    <label>  <input type="radio" value="101,200" name="cusion"/> 
                    101-200
                    </label> <br/>
                    <label> <input type="radio" value="201,300" name="cusion"/>
                    201-300
                    </label> <br/>
                    <label> <input type="radio" value="301,400" name="cusion"/>
                    301-400
                    </label> <br/>
                    <label> <input type="radio" value="401,1000" name="cusion"/> 
                    401-1000
                    </label>
                </div>
               
            </React.Fragment>
        )
    }
}

export default Costfilter