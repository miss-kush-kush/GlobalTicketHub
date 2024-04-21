
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './providers/auth-provider/AuthProvider';
import AuthPage from './components/auth/AuthPage';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
        <Route path='/home' element={<h1>HOME!</h1>} />
      </Routes>
   </AuthProvider>
  );
}

export default App;
