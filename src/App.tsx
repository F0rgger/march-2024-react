import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import UserPosts from './pages/UserPosts';
import PostComments from './pages/PostComments';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/posts/:userId" element={<UserPosts />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/comments/:postId" element={<PostComments />} />
                <Route path="/comments" element={<Comments />} />
            </Routes>
        </Router>
    );
}

export default App;
