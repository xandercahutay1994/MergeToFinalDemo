import React, { Component } from "react";
import axios from "axios";
import { FETCH_POSTS_URL } from "../api";
import BlogLists from "../components/BlogLists"
import BLogForm from "./BlogForm"

class Blogs extends Component{
    
    constructor(){
        super()
        this.state = {
            allBlogPosts: [],
            isFetching: false,
            title: '',
            body: '',
            id: 101
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

    render(){
        const { allBlogPosts, isFetching } = this.state;

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
                    />
                }
            </div>
        )
    }
}

export default Blogs;