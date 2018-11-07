import React from "react"

const CommentLists = props => {
    return props.commentLists.map(lists => 
        <div key={ lists.id }>
            <h5 className="text-primary">{ lists.email }</h5>
            <p>{ lists.body }</p> 
        </div>  
    )
}

export default CommentLists;