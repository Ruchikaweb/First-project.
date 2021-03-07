import React from 'react' 
import Search from './Search'
import QuickApi from './Quicksearchapi'

const Home = (props) => {
    return(
        <>
        <Search/>
        <QuickApi/>
        </>
    )
}

export default Home