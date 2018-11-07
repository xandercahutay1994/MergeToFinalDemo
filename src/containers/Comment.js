import React, { Component } from "react"
import CommentLists from "../components/CommentLists"
import CommentFilter from "../components/CommentFilter"
import axios from "axios";
import { FETCH_COMMENTS_URL } from "../api";

class Comment extends Component {

    constructor(){
        super()
        this.state = {
            allComments: [],
            isFetching: false,
            searchEmail: '',
            filterComment: false
        }
    }

    componentDidMount(){
        this._isMounted = true
        this.getAllComments()
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    onChange = (e) => {
        this.setState({
            searchEmail: e.target.value
        })
    }

    getAllComments = async() => {
        try{
            const result = await axios(FETCH_COMMENTS_URL);
            const response = result.data;

            if(this._isMounted){
                this.setState({ allComments: response, isFetching: true })
            }
        }catch(e){
            console.log(e)
        }
    }
    
    submit = (e) => {
        e.preventDefault();
        this.renderCommentDetail()
    }

    renderCommentDetail = () => {
        const {allComments,searchEmail} = this.state
        let hasComment = false;
        let tempComment = {};

        allComments.filter(details => {
            if(details.email === searchEmail){
                hasComment = true;
                Object.assign(tempComment, {details})
            }
        })

        if(hasComment){
            this.setState({ filterComment: true })
        }

        const { email, name, body} = tempComment.details;

        return (
            <div>
                <h5 className="text-primary"> { email } </h5>
            </div>
        )
    }

    render(){
        const { allComments, isFetching, searchEmail, filterComment } = this.state;

        return(
            <div className="container mt-5">
                <h1 className="text-center"> All Comments </h1>
                <form onSubmit={this.submit} className="mt-5">
                    <input
                        name="searchEmail"
                        className="form-control"
                        onChange={this.onChange}
                        value={searchEmail}
                        required
                    />
                    <button className="btn btn-primary m-2">
                        Search
                    </button>
                </form>

                <div className="mt-5">
                    {
                        !isFetching ?
                            <h2 className="text-center"><i className="fa fa-spinner"></i> Loading...</h2>
                        :
                            !filterComment ?
                                <CommentLists commentLists={allComments}/>
                            :

                                <CommentFilter commentFilter={allComments} email={searchEmail}/>

                            // <CommentLists commentLists={allComments}/>
                    } 

                </div>
            </div>
        )
    }
}

export default Comment;