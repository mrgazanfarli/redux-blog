import React from 'react';

const Post = props => {
    const { post } = props;
    const charactersToShow = 150;

    return (
        <div className="card shadow p-2 mb-3">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                    {post.body.length > charactersToShow ? `${post.body.substring(0, charactersToShow)}...` : post.body}
                </p>
            </div>
        </div>
    )
}

export default Post;