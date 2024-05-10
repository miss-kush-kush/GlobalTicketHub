import axios from 'axios';
import i18next from 'i18next';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PayContext from '../../../contexts/PayContext';
const LiqPayCheckout = () => {
    const navigate = useNavigate()
    const {pay, setPayStatus} = useContext(PayContext)
  useEffect(() => {
    pay().then(res=>{
        const script = document.createElement('script');
        script.src = "//static.liqpay.ua/libjs/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
        window.LiqPayCheckoutCallback = () => {
            window.LiqPayCheckout.init({
            data: res.data.data,
            signature: res.data.signature,
            embedTo: "#liqpay_checkout",
            language: i18next.language,
            mode: "embed"
            }).on("liqpay.callback", function(data){
            setPayStatus(data.status).then(res => {
              if(res.status==200) {
                  toast("Дані про квитки скоро будуть надіслані на ваш Email або СМС на телефон")
                  navigate('/')
              } else {
                toast.error('Виникла помилка виберіть інші місця')
                navigate(-2)
              }
            })
            
            }).on("liqpay.ready", function(data){
            // ready
            }).on("liqpay.close", function(data){
                
            });
        };
        };

        return () => {
        document.body.removeChild(script);
        };
    })
  }, []);

  return <div id="liqpay_checkout"></div>;
};

export default LiqPayCheckout;