import React from 'react';
import { connect } from 'react-redux';

import Preloader from './Preloader';
import Post from './Post';
import { postStatuses } from '../constants';
import { getPosts, handlePostsStatus } from '../actions';

class PostList extends React.Component {
    async componentDidMount() {
        this.props.handlePostsStatus(postStatuses.loading);
        try {
            await this.props.getPosts();
            this.props.handlePostsStatus(postStatuses.success);
        } catch{
            this.props.handlePostsStatus(postStatuses.error);
        }
    }
    render() {
        const { postsStatus } = this.props;

        if (postsStatus === postStatuses.loading) {
            return (
                <Preloader />
            )
        } else if (postsStatus === postStatuses.error) {
            return (
                <div>
                    <h5 className="text-center text-danger">
                        Request failed! Please, make sure you have an internet connection...
                    </h5>
                </div>
            )
        } else {
            return (
                this.props.posts.map(post => <Post post={post} key={post.id} />)
            )

        }

    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        postsStatus: state.postsStatus
    };
}

export default connect(mapStateToProps, { getPosts, handlePostsStatus })(PostList);