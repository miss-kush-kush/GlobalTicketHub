import axios from 'axios';
import i18next from 'i18next';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PayContext from '../../../contexts/PayContext';
import TicketContext from '../../../contexts/TicketContext';
const LiqPayCheckout = () => {
    const navigate = useNavigate()
    const {pay, setPayStatus} = useContext(PayContext)
    const {transportId, selectWagon, tickets } = useContext(TicketContext)
  useEffect(() => {
    pay().then(res=>{
        if(res.status==200) {
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
              setPayStatus(res.orderId,data.status, transportId, selectWagon, tickets).then(resSetPaySt => {
                if(resSetPaySt.status==200) {
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
        } else {
          toast.error('Ой, сталася помилка, виберіть інші місця!')
          navigate(-2)
        } 
      })
  }, []);

  return <div id="liqpay_checkout"></div>;
};

export default LiqPayCheckout;