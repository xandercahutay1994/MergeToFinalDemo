import React, { PureComponent } from "react"
import CommentLists from "../components/CommentLists"
import axios from "axios";
import { FETCH_COMMENTS_URL } from "../api";
import Navigation from "../components/Navigation"
import { connect } from "react-redux"
import { FETCH_COMMENTS_ACTION } from "../redux/actions/comment"

class Comment extends PureComponent {
    constructor(){
        super()
        this.state = {
            searchEmail: ''
        }
    }

    componentDidMount(){
        this.props.fetchCommentsFromAPI()
    }

    onChange = (e) => {
        this.setState({
            searchEmail: e.target.value
        })
    }

    renderCommentLists = () => {
        const { isFetching, allComments, filterComment } = this.props;
        const { searchEmail } = this.state
        
        return(
            isFetching ?
                <h2 className="text-center"><i className="fa fa-spinner"></i> Loading...</h2>
            :   
                <CommentLists commentLists={allComments} email={searchEmail}/>
        )
    }
 
    render(){
        const { searchEmail } = this.state;
        return(
            <div className="container mt-5">
                <Navigation />
                <h1 className="text-center"> All Comments </h1>
                <div className="mt-5">
                    <input
                        name="searchEmail"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={this.onChange}
                        value={searchEmail}
                        required
                    />
                </div>
                <div className="mt-5">
                    { this.renderCommentLists() }
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { allComments, isFetching, filterComment } = state.comment
    return {
        allComments,
        isFetching,
        filterComment
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCommentsFromAPI: () => {
            dispatch(FETCH_COMMENTS_ACTION())
        }
    } 
}


export default connect(mapStateToProps,mapDispatchToProps)(Comment)