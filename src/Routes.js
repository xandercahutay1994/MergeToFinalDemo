import React from "react";
import {Route} from "react-router-dom"
import Blogs from "./containers/Blogs"
import Comment from "./containers/Comment"

const Routes = () => {
    return(
        <div>
            <Route path="/" component={Blogs} exact/>
            <Route path="/comment" component={Comment} />
        </div>
    )
}

export default Routes;