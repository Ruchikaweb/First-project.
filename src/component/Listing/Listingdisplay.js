import React from 'react'
import './Listing.css' 
import {Link} from 'react-router-dom'

const Display = (props) => {
    const Resttt = ({restlist}) => {
        if(restlist){ 
            if(restlist.length>0){
                return restlist.map((item) => {
                    return(
                        <React.Fragment> 
                            <div class="restt"> 
                                <div class="imagee">
                                    <img src={item.thumb}className="imgg" height="100px" width="100px"/>
                                </div>
                                <div class="text">
                                 <Link to={`/details/${item._id}`} > <span id="cakery"> {item.name}</span> <br/> </Link>
                                    <span> {item.locality}</span><br/>
                                    <small> {item.address}</small>
                                </div>     
                                <div class="bakery">
                                    <hr/>
                                    <span class="text1"> cusinis:</span>
                                    <span class="text2"> Bakery </span>
                                </div>
                                <div>
                                    <span class="text3"> cost for two:</span>
                                    <span class="text4"> {item.cost} </span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            } 
            else{
                return(
                    <div>
                        <center>
                            <h2 id="listtext">No Data On This Filter</h2>
                        </center>
                    </div>
                )
            }
            }
        else{
            return(
                <div>
                    <img src="/images/loader.gif"/>
                </div>
            )
        }

    }
    return(
        <>
        {Resttt(props)}
        </>
        
    )
}

export default Display