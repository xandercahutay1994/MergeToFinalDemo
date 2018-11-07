import React, { Component } from "react";
import axios from "axios";
import { 
    FETCH_POSTS_URL,
    FETCH_SPEC_COMMENT_URL 
} from "../api";
import BlogLists from "../components/BlogLists"
import BLogForm from "./BlogForm"
import Navigation from "../components/Navigation"
import Login from "./Login"
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom"
import Modal from "react-responsive-modal"

class Blogs extends Component{
    
    constructor(){
        super()
        this.state = {
            allBlogPosts: [],
            isFetching: false,
            title: '',
            body: '',
            id: 101,
            blogComments: [],
            openModal: false
        }
    }

    componentDidMount(){
        this._isMounted = true;
        this.getBlogPost()
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
    
    async getBlogPost() {
        try{
            const result = await axios(FETCH_POSTS_URL);
            const response = result.data;
            
            if(this._isMounted){
                this.setState({
                    allBlogPosts: response,
                    isFetching: true
                })
            }
        }catch(e){
            console.log(e)
        }
    }

    newBlogPost = (title,body) => {
        this.state.allBlogPosts.unshift({id: this.state.id, title:title,body:body});

        this.setState(prevState => ({
            title:title,
            body:body,
            id: prevState.id + 1
        }))
    }

    getComments = async(id) => {
        const result = await axios(FETCH_SPEC_COMMENT_URL + id);
        const response = result.data;

        this.setState({ blogComments: response, openModal: true })
    }

    closeModal = () => {
        this.setState({ openModal: false })
    }

    renderModal = (blogComments) => {
        return (
            <Modal open={this.state.openModal} onClose={()=>this.closeModal()}>
                {
                    blogComments.map(details => 
                        <div key={details.id} className="justify-content-center mt-3 p-2">
                            <div className="row">
                                <h5 className="col-md-2"> Email </h5>
                                <span className="form-control col-md-8">{details.email} </span>
                            </div>
                            <div className="row mt-3">
                                <h5 className="col-md-2"> Name </h5>
                                <span className="form-control col-md-8">{details.name} </span>
                            </div>
                            <div className="row mt-3">
                                <h5 className="col-md-2"> Name </h5>
                                <span className="form-control col-md-8">{details.body} </span>
                            </div>
                            <hr/>
                        </div>
                    )
                }
               <a href="#" className="offset-md-8 mt-3 btn btn-danger" onClick={()=>this.closeModal()}> Close </a>
            </Modal>
        )
    }

    render(){
        const { allBlogPosts, isFetching, blogComments } = this.state;

        return (
            <div className="mt-5">
                <h1 className="mb-5 text-center text-primary"> Blog Posts </h1>
                <BLogForm 
                    disableBtn={isFetching} 
                    addPost={this.newBlogPost}
                />
                <hr/>
                {
                    !isFetching ?
                        <h2 className="text-center">
                            <i className="fa fa-spinner"></i> Loading...
                        </h2> 
                    :
                    <BlogLists 
                        blogLists={allBlogPosts}
                        details={this.getComments}
                    />
                }
                {this.renderModal(blogComments)}
            </div>
        )
    }
}

export default Blogs;