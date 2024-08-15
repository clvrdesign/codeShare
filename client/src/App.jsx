import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './components/CreatePost';
import Posts from './pages/Posts';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trends" element={<Posts />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
