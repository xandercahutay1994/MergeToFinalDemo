import React, {Component} from "react";
import axios from "axios"
import { FETCH_USERS_URL } from "../api"
import Login from "./Login";
import Blogs from "./Blogs";
import Comment from "./Comment";



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
                if(user.username == username && user.email == email)
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
            <div className="container">
                {/* {
                    !isAuthenticated ?
                        <Login getUser={this.checkIfUser} isUser={isUser}/>
                    :
                        <Blogs />
                } */}
                <Blogs />
                {/* <Comment /> */}
            </div>
        )
    }
}

export default App;
