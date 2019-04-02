import React, {Component} from 'react'
import PostForm from './PostForm.js'
import { withUser } from '../context/UserProvider.js'

class PostList extends Component {
    constructor(){
        super()
        this.state = {
            caption: "",
            imgUrl: ""
        }
    }

    componentDidMount(){
        this.props.getUserPosts()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.addPost(this.state)

        this.setState({
            caption: "",
            imgUrl: ""
        })
    }

    render(){
        return (
            <div>
                <PostForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    caption={this.state.caption}
                    imgUrl={this.state.imgUrl}
                />
                { this.props.posts.map(post => <h1 key={post._id}>{post.caption}</h1>)}
            </div>
        )
    }
}

export default withUser(PostList)