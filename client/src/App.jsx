import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './components/CreatePost';
import Posts from './pages/Posts';
import SinglePost from './pages/SinglePost';
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
