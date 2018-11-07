import React from "react"

const BlogLists = props => {
    return props.blogLists.map(lists => 
        <div key={ lists.id }>
            {lists.id}
            <a href="#" onClick={()=>props.details(lists.id)}><h5 className="text-primary">{ lists.title }</h5></a>
            <p>{ lists.body }</p>
        </div>  
    )
}

export default BlogLists;