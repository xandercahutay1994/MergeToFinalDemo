import React, {Component} from "react"
import axios from "axios"
import { FETCH_USER_URL } from "../api"

class Login extends Component{
   
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            isAuthenticated: false
        }
    }

    onChange = (e) => {
        const { name,value } = e.target;
        this.setState({
            [name]: value
        })
    }
    
    submit = (e) => {
        e.preventDefault();
        const { username, email } = this.state
        this.checkIfUser(username,email);
    }

    checkIfUser = async(username,email) => {
        let isMatch = false;

        try{
            const result = await axios.get(FETCH_USER_URL);
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
                isAuthenticated: true
            })
            console.log('dashboard')
        }
           
        console.log('login')
        
    }

    render(){
        return(
            <div className="container mt-5 col-lg-6">
                <h1 className="text-center"> Login </h1>
                <div className="form-group justify-content-center">
                    <form onSubmit={this.submit}>
                        <div className="row">
                            <label className="col-md-12 col-lg-12">
                                Username 
                                <input 
                                    type="text" 
                                    name="username" 
                                    className="form-control" 
                                    onChange={this.onChange}
                                    value={this.state.username}
                                    required
                                />
                            </label>
                        </div>
                        <div className="row">
                            <label className="col-md-12 col-lg-12">
                                Email 
                                <input 
                                    type="text" 
                                    name="email" 
                                    className="form-control" 
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    required
                                />
                            </label>
                        </div>
                        <button className="btn btn-primary btn-block mt-2">
                            <i className="fa fa-sign-in"></i>  Login 
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login