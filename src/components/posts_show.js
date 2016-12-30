//importing PropTypes allows us to authomatically redirect back to the homepage when post is deleted (see onDeleteClick method)
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component{
// CYCLE:
    // 1. id comes from the URL.
    // 2. pass id to fetchPost action creator.
    // 3. fetchPost makes the back end request to API, it resolves with some data,
    // 4. reducer picks the action up and returns state concantenated with the payload, which is renamed 'post'.
    // 5. with mapStateToProps, I return the post as props to the component I'm working inside here.
    // 6.. then i can show post below inside of component, below.

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.params.id).then(()=>{
            this.context.router.push('/');
        })
    }

    render(){
        if (!this.props.post){
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to='/'>Back to Index</Link>
                <button onClick={this.onDeleteClick.bind(this)}
                    className='btn btn-danger float-right'>Delete this post</button>

                <h3>{this.props.post.title}</h3>
                <h6>Categories: {this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log(state.posts.post, 'STATE.POSTS.POST from mapStateToProps');
    return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
