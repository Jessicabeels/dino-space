import React from 'react'

const PostForm = props => {
    const { handleSubmit, handleChange, caption, imgUrl } = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="caption" 
                value={caption} 
                onChange={handleChange}
                placeholder="Caption"/>
            <input 
                type="text" 
                name="imgUrl" 
                value={imgUrl} 
                onChange={handleChange}
                placeholder="Image Url"/>
            <button>Add Post</button>
        </form>
    )
}

export default PostForm



















// import React from 'react'

// const PostForm = props => {
//     const { handleSubmit, handleChange, caption, imgUrl } = props
//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 type="text" 
//                 name="caption" 
//                 value={caption} 
//                 onChange={handleChange}
//                 placeholder="Caption"/>
//             <input 
//                 type="text" 
//                 name="imgUrl" 
//                 value={imgUrl} 
//                 onChange={handleChange}
//                 placeholder="Image Url"/>
//             <button>Add Post</button>
//         </form>
//     )
// }

// export default PostForm