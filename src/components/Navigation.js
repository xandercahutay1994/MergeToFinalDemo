import React from "react"
import { Link }   from "react-router-dom"

const Navigation = () => {
    return(
        <div className="container row m-3">
            <Link to="/blogs"> <h5> Blogs </h5> </Link> 
            <Link to="/comment" className="col-sm-2"> <h5> Comments </h5> </Link> 
            <Link to="/"> Logout </Link>
        </div>
    )
}

export default Navigation;