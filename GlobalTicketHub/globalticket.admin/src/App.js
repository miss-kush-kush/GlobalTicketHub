
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './providers/auth-provider/AuthProvider';
import AuthPage from './components/auth/AuthPage';
import RouteTest from './components/home/route/RouteTest.jsx'
import Home from './components/home/Home';
import AuthGuard from './components/guards/AuthGuard';
import RouteBlock from './components/home/body/sectinons/api-block/blocks/route-block/RouteBlock';
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
        <Route path='/home' element={<AuthGuard><Home/></AuthGuard>} >
          <Route path='add-route' element={<RouteBlock/>}/>
          <Route path='add-transport' element={<>add transport</>}/>
          <Route path='change-route' element={<>change route</>}/>
          <Route path='change-transport' element={<>change transport</>}/>
        </Route>
      </Routes>
   </AuthProvider>
  );
}

export default App;
