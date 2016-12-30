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


    render(){
        return(
            <div>
                <div className='text-xs-right'>
                    <Link to='/posts/new' className='btn btn-primary'>Add a post</Link>
                </div>
                List of blog posts
            </div>
        );
    }
}


// mapDispatchToProps is refactored in the export statement below to {fetchPosts:fetchPosts}
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts}, dispatch);
// }
export default connect(null, {fetchPosts:fetchPosts})(PostsIndex);
