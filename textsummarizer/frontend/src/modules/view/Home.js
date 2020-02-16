import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Go from './Go';
import What from './learn/What';
import Types from './learn/Types';

export default class Home extends React.Component{
    render() {
        return(
            <div>
                <NavBar />
                <Banner />
                <What />
                <Types />
                <Go />
            </div>
        )
    }
}