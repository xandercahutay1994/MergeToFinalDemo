import React, {Component} from "react"

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
        const { username, email } = this.state;

        this.props.getUser(username,email)
    }

    notAUser(){
        return <div> <h3> Email/Username is incorrect! </h3></div>
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

                        <button className="btn btn-primary btn-block mt-2">
                            <i className="fa fa-sign-in"></i>  Login 
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}

export default Login;