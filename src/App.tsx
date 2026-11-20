import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import { AuthProvider } from './store/AuthContext';
import { Toaster } from 'sonner';

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-center" richColors closeButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
