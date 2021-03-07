import React from 'react'
import  Quicksearch from './Quicksearch'
const url = "https://resst-app.herokuapp.com/mealtype"

class QuickApi extends React.Component{
    constructor(){
        super()

        this.state={ 
            mealtype:'' 
        }
    } 
    render(){ 
        return(
            <Quicksearch  Quickdata={this.state.mealtype} />
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => (res.json())) 
        .then((data) => this.setState({mealtype:data}))
    }
}

export default QuickApi
