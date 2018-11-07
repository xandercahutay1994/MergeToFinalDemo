import React, {Component} from "react";
import axios from "axios"
import { FETCH_USERS_URL } from "../api"
import Login from "./Login";
import Blogs from "./Blogs";
import Comment from "./Comment";
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom"


class App extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            isAuthenticated: false,
            isUser: ''
        }
    }

    checkIfUser = async(username,email) => {
        let isMatch = false;

        try{
            const result = await axios.get(FETCH_USERS_URL);
            let users = result.data;

            for(let user of users){
                // if(user.username == username && user.email == email)
                if(username == "admin" && email == "admin")
                    isMatch = true
            }
        }catch(e){
            console.log(e)
        }

        if(isMatch){
            this.setState({
                username: '',
                email: '',
                isAuthenticated: true,
                isUser: true
            })
        }else{
            this.setState({ isUser: false })

        }
    }

    render(){
        const { isAuthenticated, isUser } = this.state;

        return(
            <Router>
                <div className="container">
                    {/* {
                        !isAuthenticated ?
                            <Login getUser={this.checkIfUser} isUser={isUser}/>
                        :
                            <Blogs />
                    } */}
                    <Blogs />
                    {/* <Comment /> */}
                    <Route path="/blogs" component={Blogs}/>
                    <Route path="/comment" component={Comment} />
                    
                </div>
            </Router>
        )
    }
}

export default App;
