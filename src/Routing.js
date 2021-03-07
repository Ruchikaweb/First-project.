import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './component/Home/Home'
import Listingapi  from './component/Listing/Listingapi'
import Displaypage from './component/Details/Restdetails'
import Displayapi from './component/booking/displayapi'
import Placebooking from './component/booking/placehoder'
const Routing = () => {
    return(
        <BrowserRouter>
        <Route exact path='/' component= {Home} /> 
        <Route path='/Listing/:id'  component= {Listingapi}/>
        <Route path="/details/:id" component ={Displaypage} /> 
        <Route path="/vieworder" component ={Displayapi} />
        <Route path="/booking/:name" component={Placebooking}/>
        </BrowserRouter>
    )
}

export default Routing
 