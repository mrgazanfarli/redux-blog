import React from 'react';

import PostList from './PostList';
import '../assets/css/preloader.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mt-4">
                    <div className="col-10">
                        <h3 className="text-center text-success mb-4">Welcome to the BlogApp!</h3>
                        <PostList />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;