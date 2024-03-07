import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Why from './pages/Why';
import Closets from './pages/Closets';
import Consultation from './pages/Consultation';
import Gallery from './pages/Gallery';
import Doors from './pages/Doors';
import Entryway from './pages/Entryway';
import Garage from './pages/Garage';
import Living from './pages/Living';
import Storage from './pages/Storage';
import Workspace from './pages/Workspace';
import Privacy from './pages/Privacy';
import Careers from './pages/Careers';
import LogIn from './pages/Login';
import Blog from './pages/Blog';
import BlogConfiguration from './pages/BlogConfiguration';

function App() {
  return (
    <>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="why" element={<Why />} />
          <Route path="closets" element={<Closets />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="doors" element={<Doors />} />
          <Route path="entry" element={<Entryway />} />
          <Route path="garage" element={<Garage />} />
          <Route path="living" element={<Living />} />
          <Route path="storage" element={<Storage />} />
          <Route path="workspace" element={<Workspace />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="careers" element={<Careers />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}

          <Route path="login" element={<LogIn />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-configuration" element={<BlogConfiguration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
