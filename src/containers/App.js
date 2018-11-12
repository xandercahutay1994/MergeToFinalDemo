import React, { PureComponent } from "react";
import Login from "./Login";
import Blogs from "./Blogs";
import Comment from "./Comment";
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom"
import Routes from "../Routes"
import { connect } from "react-redux"

class App extends PureComponent{
   
    render(){
        const { isAuthenticated } = this.props;
        return(
            <Router>
                <div className="container">
                    {/* {
                        isAuthenticated ?
                            <Routes />
                        :   
                            <Login />
                    } */}
                    <Comment />
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.user.isAuthenticated)
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

export default connect(mapStateToProps)(App)
