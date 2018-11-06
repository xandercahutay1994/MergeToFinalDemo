import React, {Component} from "react";
import Login from "./Login";

class App extends React.PureComponent{
    
    constructor(){
        super()
        this.state = {
        }

    }


   
    render(){

        return(
            <div className="container">
                <Login />
                
            </div>
        )
    }
}

export default App;
