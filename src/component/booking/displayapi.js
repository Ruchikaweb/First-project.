import React from 'react'
import Displaydata from '../booking/displaydata'
const url ="https://resst-app.herokuapp.com/order"
class Displayapi extends React.Component{
    constructor(){
        super()

        this.state ={
            booking:''
        }
    }
    render(){ 
        return(
            <div>
                <Displaydata Datadisplay={this.state.booking} />
            </div>
        )
    }

    componentDidMount(){
         fetch( url,{method:'GET'})
         .then((res)=> res.json())
         .then((data) => this.setState({booking:data}))
    }
}


export default  Displayapi