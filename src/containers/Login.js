import React, {Component} from "react"
import { connect } from "react-redux"
import {
    LOGIN_USER_ACTION
} from "../redux/actions/user"

class Login extends Component{
   
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: ''
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
        const { username, email } = this.state;
        const userData = {
            username,
            email
        }
        this.props.loginUser(userData)
    }

    notAUser(){
        if(this.props.isAuthenticated === false){
            return <h5 className="text-center text-danger"> Email/Username is incorrect! </h5>
        }
    }

    render(){
        const { username, email } = this.state; 
        const { isUser } = this.props;
        
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
                                    value={username}
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
                                    value={email}
                                    required
                                />
                            </label>
                        </div>
                        {this.notAUser()}
                        <button className="btn btn-primary btn-block mt-2">
                            <i className="fa fa-sign-in"></i>  Login 
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (userData) => {
            dispatch(LOGIN_USER_ACTION(userData))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
