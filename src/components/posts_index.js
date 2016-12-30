import React, {Component} from 'react';
import {connect} from 'react-redux';
//bindActionCreators not necessary anymore because of the refactor below
// import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index'
//Link is an actual component. Shows up in HTML as an anchor tag.
import {Link} from 'react-router';

class PostsIndex extends Component {
    //componentWillMount is a lifecycle method so it's automatically called by React when it's going to be loaded to the DOM for the first time.
    componentWillMount(){
        // console.log('this would be a good time to call an action creator to fetch posts.');
        this.props.fetchPosts();
    }


    renderPosts(){
        return this.props.posts.map((post)=>{
            return (
                <li className='list-group-item' key={post.id}>
                    <span className='float-right'>{post.categories}</span>
                    <strong>{post.title}</strong>
                </li>
            );
        })
    }

    render(){
        return(
            <div>
                <div className='text-xs-right'>
                    <Link to='/posts/new' className='btn btn-primary'>Add a post</Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}



function mapStateToProps(state){
    return {posts: state.posts.all};
}

// mapDispatchToProps is refactored in the export statement below to {fetchPosts:fetchPosts}
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts}, dispatch);
// }
export default connect(mapStateToProps, {fetchPosts:fetchPosts})(PostsIndex);
