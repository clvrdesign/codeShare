import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './components/CreatePost';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
