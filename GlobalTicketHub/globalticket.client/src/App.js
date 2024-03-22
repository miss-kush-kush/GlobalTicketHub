import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { AuthProvider } from './providers/AuthProvider';
import Navbar from './components/header/Navbar';
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { Modal } from 'antd';
import AuthForm from './components/auth/AuthForm'
import { ToastContainer } from 'react-toastify';
function App() {
  const [visible, setVisible] = useState(false);
  /*
  
  */
  return (
    <>
      <AuthProvider>
        <Navbar setVisible={setVisible}/>
        <Home/>
        <Footer/>
        <Modal
                  className='modal-width'
                  title={null}
                  footer={null}
                  open={visible}
                  onOk={()=>setVisible(false)}
                  onCancel={()=>setVisible(false)}>
          <AuthForm/>
        </Modal>
        
      </AuthProvider>
    </>
  );
}

export default App;
