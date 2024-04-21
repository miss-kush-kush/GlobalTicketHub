import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { AuthProvider } from './providers/AuthProvider';
import Home from './components/home/Home'
import { ToastContainer } from 'react-toastify';
import MainProfile from './components/profile/main_profile/MainProfile';
import { Routes, Route } from 'react-router-dom';
import HomeMain from './components/home/HomeMain';
import Layout from './components/Layout';
import TicketsBlock from './components/ticket/TicketsBlock';
import HomeProfileBody from './components/profile/body/HomeProfileBody';
import Settings from './components/profile/body/settings/Settings';
import './i18n'
import SeatPicker from './components/ticket/seat-picker/SeatPicker';
import ClientDataBlock from './components/ticket/passagire-data/ClientDataBlock';
function App() {
  const [startPoint, setStartPoint] = useState('')
    const [endPoint, setEndPoint] = useState('')
    const setPoints = (start,end)=>{
        setStartPoint(start)
        setEndPoint(end)
    }
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home startPoint={startPoint} endPoint={endPoint}/>}>
              <Route path='/' element={<HomeMain setPoints={setPoints}/>}/>
              <Route path='/search/train/:start/:end' element={<TicketsBlock type={"TRAIN"}/>}/>
              <Route path='/train/seat' element={<SeatPicker/>}/>
              <Route path='/train/client' element={<ClientDataBlock/>}/>
            </Route>
            <Route path='/profile' element={<MainProfile />}>
              <Route path='*' element={<HomeProfileBody/>}/>
              <Route path='ticket/train' element={<h1>Train</h1>}/>
              <Route path='ticket/bus' element={<h1>Bus</h1>}/>
              <Route path='ticket/airplane' element={<h1>AIR</h1>}/>
              <Route path='settings' element={<Settings/>}/>
            </Route>
            <Route path='/bus' element={<><h1>BUS!</h1></>}/>
            <Route path='/airplane' element={<><h1>AIRPLANE!</h1></>}/>
            <Route path='/schedule' element={<><h1>SCHEDULE!</h1></>}/>
          </Route>
        </Routes>
        <ToastContainer/>
      </AuthProvider>
    </>)
}

export default App;
