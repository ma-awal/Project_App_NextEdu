import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import UseLoading from './components/UseLoading/UseLoading.jsx';
import Loader from './components/Loader/Loader.jsx';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Department from './pages/Department/Department';
import Teacher from './pages/Teacher/Teacher';
import Event from './pages/Event/Event';
import Student from './pages/Student/Student';
import Result from './pages/Result/Result';
import Notice from './pages/Notice/Notice';
import Gallery from './pages/Gallery/Gallery';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';

const App = () => {
  const isLoading = UseLoading();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/department" element={<Department />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/event" element={<Event />} />
        <Route path="/student" element={<Student />} />
        <Route path="/result" element={<Result />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};
export default App;
