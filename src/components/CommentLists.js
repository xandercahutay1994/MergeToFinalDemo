import CommentListsFilterTemplate from "./CommentListsFilterTemplate";
import PropTypes from "prop-types";

const CommentLists = props => {
    const { email, commentLists } = props
    let filterMatch = false;
    let specComment = {};

    return props.commentLists.map(lists => {
        if(props.email !== lists.email)
        {
            // return Object.assign(specComment, {email: lists.email, body: lists.body})
            // return Object.assign(specComment, {email: lists.email, body: lists.body})

            return CommentListsFilterTemplate({details: {id: lists.id, name: lists.name, email: lists.email, body: lists.body}})
        }else{
            // return Object.assign(specComment, lists)
            return CommentListsFilterTemplate({details: lists})
        }
    })


            
    // console.log(specComment)    
    // return CommentListsFilterTemplate({details: specComment})    

    // if(!filterMatch)
    //     return comment
    // else
    //     return CommentListsFilterTemplate({details: specComment})
}
     
CommentLists.propTypes = {
    commentLists: PropTypes.array.isRequired,
    email: PropTypes.string.isRequired
}

export default CommentLists;

