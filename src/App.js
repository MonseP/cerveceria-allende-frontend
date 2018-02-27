import React, { Component } from 'react';
import Routes from './Routes';
import LoginHome from './components/login/LoginHome';
import NavHome from './components/nav/NavHome';


class App extends Component {
    render() {
        return (



                    <div>
                          <NavHome/>
                          <Routes/>
                    </div>


        );
    }
}

export default App;
