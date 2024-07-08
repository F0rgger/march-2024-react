import React from 'react';
import PostForm from './components/PostForm';

const App: React.FC = () => {
    return (
        <div>
            <h1>Create a new Post</h1>
            <PostForm />
        </div>
    );
};

export default App;
