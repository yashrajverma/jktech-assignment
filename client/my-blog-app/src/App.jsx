import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticatedLayout, { ProtectedRoute } from './AuthenticatedLayout';
import BlogList from './pages/BlogList';
import CreateBlog from './pages/CreateBlog';
import Login from './pages/auth/login';
import Post from './components/Post';
import { useContext } from 'react';
import { UserContext } from './context/userContext';
import GoogleAuth from './pages/auth/googleLogin';
import Signup from './pages/auth/signup';

function App() {
  // const user = JSON.parse(localStorage.getItem('user')); // Example user state
  const { state, dispatch } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticatedLayout user={state.user} />}>
          <Route index element={<BlogList user={state.user} />} />
          <Route path='post/:id' element={<Post />} />
          <Route
            path="create"
            element={
              <ProtectedRoute user={state.user}>
                <CreateBlog user={state.user} />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path='google-auth-success' element={<GoogleAuth />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
