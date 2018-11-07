import React from "react"

const BlogLists = props => {
    return props.blogLists.map(lists => 
        <div key={ lists.id }>
            {lists.id}
            <h5 className="text-primary">{ lists.title }</h5>
            <p>{ lists.body }</p>
        </div>  
    )
}

export default BlogLists;