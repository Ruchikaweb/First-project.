import React from 'react' 
import './Quicksearch.css'
import {Link} from 'react-router-dom'
 const Quicksearch = (props) => {
    const renderlist = ({Quickdata}) => {
        // console.log(Quickdata)  
         if(Quickdata){ 
            return Quickdata.map((item) =>{ 
                return( 
                    <Link to={`/listing/${item._id}`}> 
                        <div class="col-md-4">  
                            <div class="image" >
                                    <div class="rest">
                                        <img src={`/images/${item.name}.png`} className="imagestylee" />
                                    </div>
                                    <div class="secondheading">
                                        <div class="sh">
                                            <span> {item.name} </span>
                                        </div>
                                        <div class="th">
                                            <span class="th"> Starts your day with exlusive {item.name} option </span>
                                        </div>   
                                    </div>
                            </div>
                        </div>   
                    </Link>          
            )
         })
        }  else{ 
            return(
                <div>
                    <img src="/images/loader.gif"/>
                </div>
            ) 
        }
    }
  
    return(
        <div className="container">
            <div className="searchpage"> Quick searches</div>
            <div className="search"> Discover restaurants by type of meal </div>  
            <div className="row">
            {renderlist(props)}
            </div>
        </div>       
    )
}

export default  Quicksearch 
