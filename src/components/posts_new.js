import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {
    static contextTypes = {
        //searches all the parents until it finds a component called router, which actually comes from our router.
        router: PropTypes.object
    };
    //^^this defines an object called contextTypes on the PostsNew class. React returns this object whenever an instance of PostsNew is created.


    onSubmit(props){
        this.props.createPost(props).then(() => {
            //only runs when blog post has been successfully created, so navigate the user to the posts index view
            //navigate by calling this.context.router.push with the new path to navigate to.
            this.context.router.push('/');
        });
    }

    render(){
        //const {fields:{title,categories,content}, handleSubmit} = this.props;
        //^^ES6 syntax. same lines:
        const handleSubmit = this.props.handleSubmit;
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;
        // console.log(title);

        // handleSubmit is from redux-form.
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                <h3>Create A New Post</h3>

                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type='text' className='form-control' {...title}/>
                    {/* {...title} makes sure all properties of title variable show up on the input, such as methods like onBlur, onUpdate, pristine, valid, etc */}
                    <div className='text-help'>
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type='text' className='form-control' {...categories} />
                    <div className='text-help'>
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea type='text' className='form-control' {...content} />
                    <div className='text-help'>
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link to='/' className='btn btn-danger'>Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};
    if (!values.title){
        errors.title = 'Enter a title';
    }
    if(!values.categories){
        errors.categories = 'Enter some categories';
    }
    if(!values.content){
        errors.content = 'Enter some content'
    }
    return errors;
}

//this injects the three props into the component, including helper functions for them that are built into the reduxForm library, such as form validation.
//reduxForm has exactly the same arguments as connect method, with one added, which is the form configuration object that comes first.
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPost})(PostsNew);
