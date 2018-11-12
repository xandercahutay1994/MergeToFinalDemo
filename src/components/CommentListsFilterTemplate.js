import React from "react";

const CommentListsFilterTemplate = ({details}) => {
    console.log(details)
    const { id, email, body } = details
    return(
        <div key={ id }>
            <h5 className="text-primary">{ email }</h5>
            <p>{ body }</p> 
        </div> 
    ) 
}

export default CommentListsFilterTemplate;