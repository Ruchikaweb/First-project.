import React from 'react'
import Header from'../../Header' ;

const Displaydata = (props) =>{
    const Booking  = ({Datadisplay}) =>  { 
        if(Datadisplay){
            return Datadisplay.map((item)=> {
                return(
                    <tr>
                        {/* <td> {item._id} </td> */}
                        <td> {item.rest_id} </td>
                        <td> {item.name} </td>
                        <td> {item.phone} </td>
                        <td> {item.address} </td>
                        <td> {item.person} </td>
                    </tr>
                ) 
            }) 
        } else{
            return(
                <div>
                    <img src="/images/loader.gif"/>
                </div>
            )
        }
    }
    return(
            <React.Fragment>
                <Header/>
                <div className="container">
                    <h3>  <center> Booking  List  </center> </h3>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                            {/* <th> OrderId </th> */}
                            <th> Restname </th>
                            <th> Name </th>
                            <th> Phone </th>
                            <th> Address </th>
                            <th> Person </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Booking(props)}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
    )
}

export  default Displaydata